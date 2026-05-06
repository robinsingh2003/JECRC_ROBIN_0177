using System.ComponentModel.DataAnnotations;

namespace Bottle.Validation
{
    public class ValidCapacityAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext context)
        {
            if (value is not int capacity)
                return new ValidationResult("Capacity is required");

            if (capacity < 500)
                return new ValidationResult("Capacity must be at least 500 ml");

            if (capacity > 2000)
                return new ValidationResult("Capacity cannot be more than 2000 ml");

            return ValidationResult.Success;
        }
    }
}