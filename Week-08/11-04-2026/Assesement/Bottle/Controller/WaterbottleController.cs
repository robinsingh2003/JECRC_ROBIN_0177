using Microsoft.AspNetCore.Mvc;
using Salary.Model;

namespace Salary.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WaterBottleController : ControllerBase
    {
        [HttpPost]
        public IActionResult Create(WaterBottle bottle)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            bottles.Add(bottle);
            return Ok("Water bottle added");
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(bottles);
        } 
    }
}