using System;

namespace Employees.models.entites
{
    public class Employee
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Department { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string Phone { get; set; }

        // The '?' means Address is allowed to be NULL in the database
        public string? Address { get; set; }
        public decimal Salary { get; set; }
    }
}
