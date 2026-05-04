using System.ComponentModel.DataAnnotations;

namespace ProductManagement.Models
{
    public class Product
    {
        [Key]
        public int Id {get; set;}
        [Required]
        [MaxLength(100)]
        public string Name {get; set;}
        [Required]
        [Range (0, 100000)]
        public decimal Price {get; set;}
        public int CategoryId {get; set;}

        public Category Category {get; set;}
    }
}