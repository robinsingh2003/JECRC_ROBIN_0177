using System.ComponentModel.DataAnnotations;

namespace Bottle.Validation
{
    public class ValidSecurityCodeAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext context)
        {
            if (value is not string code)
                return new ValidationResult("Security code required");

            if (code.Length < 8)
                return new ValidationResult("Minimum 8 characters");

            bool upper=false, lower=false, digit=false, special=false;

            foreach(char c in code)
            {
                if(char.IsUpper(c)) upper=true;
                else if(char.IsLower(c)) lower=true;
                else if(char.IsDigit(c)) digit=true;
                else special=true;
            }

            if(!upper) return new ValidationResult("Needs uppercase");
            if(!lower) return new ValidationResult("Needs lowercase");
            if(!digit) return new ValidationResult("Needs digit");
            if(!special) return new ValidationResult("Needs special char");

            return ValidationResult.Success;
        }
    }
}