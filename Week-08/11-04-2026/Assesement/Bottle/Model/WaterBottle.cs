using Bottle.Validation;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
namespace Bottle.Model
{
    public class WaterBottle
    {
        [Required]
        public string Brand { get; set; }

        [Required]
        [ValidCapacityAttribute]
        public int CapacityML { get; set; }

        [JsonIgnore]
        public decimal MinPrice { get; set; } = 100;

        [JsonIgnore]
        public decimal MaxPrice { get; set; } = 5000;

        [ValidPriceRange]
        public decimal Price { get; set; }

        [ValidSecurityCode]
        public string SecurityCode { get; set; }
    }
}