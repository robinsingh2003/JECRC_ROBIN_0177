using Microsoft.EntityFrameworkCore;
using EmployeePortal.API.Models; // Change this if your folder name is different

namespace EmployeePortal.API.Data;

public class AppDbContext : DbContext
{
    // FIX: This constructor passes configuration to the base DbContext
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    // FIX: This creates the table in MySQL
    public DbSet<Employee> Employees { get; set; }
}