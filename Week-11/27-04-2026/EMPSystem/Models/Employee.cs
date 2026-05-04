using System.ComponentModel.DataAnnotations;

namespace EMPSystem.Models
{
    public class Employee
    {
        public int Id {get; set;}
        [Required]
        public string? Name { get; set; }
        public string? Department {get; set; } = string.Empty;
        public string? Salary {get; set;} = string.Empty;
        public DateTime CreatedDate { get; set;} = DateTime.Now;
    }
}
