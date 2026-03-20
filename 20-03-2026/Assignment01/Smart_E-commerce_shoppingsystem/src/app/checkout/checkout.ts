import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class CheckoutComponent {

  @Input() cart: any[] = [];
  @Input() total: number = 0;

  user: any = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    delivery: '',
    city: '',
    date: '',
    payment: ''
  };

  submit() {
    alert('Order Placed!');
  }
}