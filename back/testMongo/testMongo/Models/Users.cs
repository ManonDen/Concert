using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace testMongo.Models
{
    public class Users
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("password")]
        public string Password { get; set; }

        [BsonElement("admin")]
        public bool Admin { get; set; } = false;
    }
}
