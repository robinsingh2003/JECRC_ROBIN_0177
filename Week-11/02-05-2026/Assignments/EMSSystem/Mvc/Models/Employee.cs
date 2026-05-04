using System.ComponentModel.DataAnnotations;

namespace Mvc.Models;

public class Employee
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Name is required")]
    [MinLength(2, ErrorMessage = "Minimum 2 characters")]
    public string? Name { get; set; }
}