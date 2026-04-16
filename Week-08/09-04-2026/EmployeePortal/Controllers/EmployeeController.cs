using Microsoft.AspNetCore.Mvc;
using EmployeePortal.models.dto;
using Employees.models.entites;

namespace EmployeePortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>();

        [HttpGet("{id}")]
        public IActionResult GetEmployeeById(Guid id)
        {
            var employee = employees.FirstOrDefault(x => x.Id == id);
            if (employee == null) return NotFound();
            return Ok(employee);
        }

        [HttpPost]
        public IActionResult CreateEmployee(CreateStudentDto createStudentDto)
        {
            var newEmployee = new Employee
            {
                Id = Guid.NewGuid(),
                Name = createStudentDto.Name,
                Department = createStudentDto.Department,
                Email = createStudentDto.Email,
                Password = createStudentDto.Password,
                Phone = createStudentDto.Phone,
                Salary = createStudentDto.Salary,
                Address = createStudentDto.Address
            };

            employees.Add(newEmployee);

            return CreatedAtAction(nameof(GetEmployeeById), new { id = newEmployee.Id }, newEmployee);
        }
    }
}