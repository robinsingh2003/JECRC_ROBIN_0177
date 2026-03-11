// using Microsoft.AspNetCore.Mvc;
// using JwtRoleAuthAPI.Data;
// using JwtRoleAuthAPI.Models;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.IdentityModel.Tokens;
// using System.IdentityModel.Tokens.Jwt;
// using System.Security.Claims;
// using System.Text;

// namespace JwtRoleAuthAPI.Controllers;

// [ApiController]
// [Route("api/[controller]")]
// public class AuthController : ControllerBase
// {
//     private readonly AppDbContext _context;
//     private readonly IConfiguration _config;

//     public AuthController(AppDbContext context, IConfiguration config)
//     {
//         _context = context;
//         _config = config;
//     }

//     [HttpPost("register")]
//     public async Task<IActionResult> Register(User user)
//     {
//         _context.Users.Add(user);
//         await _context.SaveChangesAsync();

//         return Ok(user);
//     }

//     [HttpPost("login")]
//     public async Task<IActionResult> Login(User login)
//     {
//         var user = await _context.Users.FirstOrDefaultAsync(x =>
//             x.Username == login.Username && x.Password == login.Password);

//         if (user == null)
//         {
//             return Unauthorized("Invalid credentials");
//         }

//         var token = GenerateToken(user);

//         return Ok(new { token });
//     }

//     private string GenerateToken(User user)
//     {
//         var claims = new[]
//         {
//             new Claim(ClaimTypes.Name, user.Username),
//             new Claim(ClaimTypes.Role, user.Role)
//         };

//         var key = new SymmetricSecurityKey(
//             Encoding.UTF8.GetBytes(_config["Jwt:Key"])
//         );

//         var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

//         var token = new JwtSecurityToken(
//             issuer: _config["Jwt:Issuer"],
//             audience: _config["Jwt:Audience"],
//             claims: claims,
//             expires: DateTime.Now.AddHours(1),
//             signingCredentials: creds
//         );

//         return new JwtSecurityTokenHandler().WriteToken(token);
//     }
// }



using Microsoft.AspNetCore.Mvc;
using JwtRoleAuthAPI.Data;
using JwtRoleAuthAPI.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace JwtRoleAuthAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;

        public AuthController(AppDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        // REGISTER USER
        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            if (_context.Users.Any(u => u.Username == user.Username))
            {
                return BadRequest("Username already exists");
            }

            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok("User registered successfully");
        }

        // LOGIN USER
        [HttpPost("login")]
        public IActionResult Login([FromBody] User login)
        {
            var user = _context.Users
                .FirstOrDefault(u => u.Username == login.Username && u.Password == login.Password);

            if (user == null)
            {
                return Unauthorized("Invalid username or password");
            }

            var token = GenerateToken(user);

            return Ok(new
            {
                message = "Login successful",
                token = token
            });
        }

        // GENERATE JWT TOKEN
        private string GenerateToken(User user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, user.Username ?? ""),
                new Claim(ClaimTypes.Role, user.Role ?? "")
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_config["Jwt:Key"])
            );

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(2),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}