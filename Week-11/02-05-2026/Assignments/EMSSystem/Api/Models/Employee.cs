using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class Employee
{
    public int Id { get; set; }

    [Required]
    [MinLength(2)]
    public string? Name { get; set; }
}