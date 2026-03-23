import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service'; // ✅ FIXED

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'] // ✅ FIXED
})
export class Cart implements OnInit {

  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  updateQuantity(index: number, quantity: number) {
    this.cartService.updateQuantity(index, quantity);
    this.total = this.cartService.getTotal();
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.total = this.cartService.getTotal();
  }
}