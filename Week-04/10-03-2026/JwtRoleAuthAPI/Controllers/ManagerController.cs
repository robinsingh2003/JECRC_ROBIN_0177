using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace JwtRoleAuthAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ManagerController : ControllerBase
    {
        [HttpGet("dashboard")]
        [Authorize(Roles = "Manager")]
        public IActionResult GetManagerDashboard()
        {
            return Ok("Welcome to the Manager Dashboard! Only Managers can access this.");
        }

        [HttpGet("reports")]
        [Authorize(Roles = "Admin,Manager")]
        public IActionResult GetReports()
        {
            return Ok("Reports available for Admin and Manager roles.");
        }
    }
}