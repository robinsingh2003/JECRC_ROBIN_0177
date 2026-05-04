using Microsoft.AspNetCore.Mvc;
using Api.Data;
using Api.Models;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeesController : ControllerBase
{
    private readonly AppDbContext _context;

    public EmployeesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_context.Employees.ToList());
    }

    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        var emp = _context.Employees.Find(id);
        if (emp == null) return NotFound();

        return Ok(emp);
    }

    [HttpPost]
    public IActionResult Create(Employee emp)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        _context.Employees.Add(emp);
        _context.SaveChanges();

        return CreatedAtAction(nameof(Get), new { id = emp.Id }, emp);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Employee emp)
    {
        if (id != emp.Id) return BadRequest();

        var existing = _context.Employees.Find(id);
        if (existing == null) return NotFound();

        existing.Name = emp.Name;
        _context.SaveChanges();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var emp = _context.Employees.Find(id);
        if (emp == null) return NotFound();

        _context.Employees.Remove(emp);
        _context.SaveChanges();

        return NoContent();
    }
    [HttpGet]
[HttpGet]
public IActionResult GetAll(string? search, int page = 1, int pageSize = 5)
{
    var query = _context.Employees.AsQueryable();

    if (!string.IsNullOrEmpty(search))
    {
        query = query.Where(e => e.Name!.Contains(search));
    }

    int totalCount = query.Count();

    var data = query
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .ToList();

    return Ok(new
    {
        totalCount,
        page,
        pageSize,
        data
    });
}
}