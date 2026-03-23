import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customcurrency',
  standalone: true,
})
export class CustomcurrencyPipe implements PipeTransform {

  transform(value: number | null | undefined): string {
    if (value == null || isNaN(value)) return '₹0';

    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(value);
  }

}