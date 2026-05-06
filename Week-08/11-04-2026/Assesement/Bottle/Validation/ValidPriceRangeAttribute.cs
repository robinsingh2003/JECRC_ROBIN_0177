using System.ComponentModel.DataAnnotations;
using Bottle.Model;

namespace Bottle.Validation
{
    public class ValidPriceRangeAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext context)
        {
            if (value is not decimal price)
                return new ValidationResult("Price is required");

            var bottle = context.ObjectInstance as WaterBottle;

            if (bottle == null)
                return ValidationResult.Success;

            if (price < bottle.MinPrice)
                return new ValidationResult($"Price cannot be less than {bottle.MinPrice}");

            if (price > bottle.MaxPrice)
                return new ValidationResult($"Price cannot be more than {bottle.MaxPrice}");

            return ValidationResult.Success;
        }
    }
}