import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service'; // ✅ FIXED

interface CheckoutForm {
  name: string;
  email: string;
  address: string;
  paymentMethod: string;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {
  cartItems: any[] = [];
  total = 0;
  form: CheckoutForm = {
    name: '',
    email: '',
    address: '',
    paymentMethod: ''
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  submit() {
    if (this.form.name && this.form.email && this.form.address && this.form.paymentMethod) {
      alert(`Order placed successfully!\n\nTotal: ₹${this.total}\nCustomer: ${this.form.name}`);
      this.cartService.clearCart();
      // Navigate back to products
      window.location.href = '/';
    } else {
      alert('Please fill all fields');
    }
  }
}

