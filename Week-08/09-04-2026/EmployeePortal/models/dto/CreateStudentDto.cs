using System.ComponentModel.DataAnnotations;

public class CreateStudentDto
{
    [Required]
    public string Name { get; set; } = string.Empty;

    [Required]
    public string Department { get; set; } = string.Empty;

    [Required]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;

    [Required]
    public string Phone { get; set; } = string.Empty;

    public decimal Salary { get; set; }

    public string? Address { get; set; }
}