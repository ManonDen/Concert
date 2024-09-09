using IFramework.Infrastructure;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using MongoDB.Driver.Core.Operations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using testMongo.Models;
using Umbraco.Core.Models.Membership;

namespace testMongo.Services
{
    public class UserService
    {
        private readonly IMongoCollection<Users> users;
        private readonly string? key;

        public UserService(IOptions<UsersDatabaseSettings> usersDatabaseSettings,IOptions<SecuritySettings> securitySettings)
        {
            var mongoClient = new MongoClient(usersDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(usersDatabaseSettings.Value.DatabaseName);
            users = mongoDatabase.GetCollection<Users>(usersDatabaseSettings.Value.CollectionName);

            this.key = securitySettings.Value.JwtKey;
        }

        public List<Users> GetUsers() => users.Find(user => true).ToList();
        public Users GetUser(string id) => users.Find<Users>(user =>  user.Id == id).FirstOrDefault();
        public Users Create(Users user)
        {
            users.InsertOne(user);
            return user;
        }
        public (string? , bool?) Authenticate(string email, string password)
        {
            var user = this.users.Find(x => x.Email == email).FirstOrDefault();
            if (user == null)
                return (null,null);
            else if (!BCrypt.Net.BCrypt.Verify(password, user.Password))
                return (null, null);
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.ASCII.GetBytes(key);
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                     new Claim(ClaimTypes.Email, email),
                    new Claim(ClaimTypes.Role,user.Admin? "Admin" :"")

                }),

                Expires = DateTime.UtcNow.AddHours(10),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(tokenKey),
                    SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return (tokenHandler.WriteToken(token),user.Admin);
        }
        
    }
}
