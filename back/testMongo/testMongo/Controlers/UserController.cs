using IFramework.Infrastructure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using testMongo.Dto;
using testMongo.Models;
using testMongo.Services;


namespace testMongo.Controlers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly UserService _userService;
        private readonly AutoMapper.IMapper _mapper;
        public UserController(UserService userService, AutoMapper.IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public ActionResult<List<Users>> GetUsers()
        {
            // TODO tester ça s'il vous please
             Request.Headers.TryGetValue("Authorization", out StringValues headerValue);

            return _userService.GetUsers();
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("{id:length(24)}")]
        public ActionResult<Users> GetUser(string id)
        {
            var user = _userService.GetUser(id);
            return Json(user);
        }

        [AllowAnonymous]
        [HttpPost]
        public ActionResult<Users> Create(UsersDto userDto)
        {
            var user = _mapper.Map<Users>(userDto);

            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(user.Password);
    user.Password = hashedPassword;
            _userService.Create(user);
            return Json(user);
        }

        [AllowAnonymous]
        [Route("authenticate")]
        [HttpPost]
        public ActionResult Login([FromBody] UsersDto user)
        {
            var token = _userService.Authenticate(user.Email, user.Password);

            if (token == (null,null))
                return Unauthorized();

            return Ok(new { token =  token.Item1, user , admin = token.Item2});
        }
    }
    
}
