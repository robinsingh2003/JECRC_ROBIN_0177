import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product';
import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { DashboardComponent } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    DashboardComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 products = [
  {
    id: 1,
    name: 'MacBook Air',
    price: 95000,
    category: 'Electronics',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'
  },
  {
    id: 2,
    name: 'iPhone 14',
    price: 70000,
    category: 'Electronics',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 4000,
    category: 'Fashion',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1528701800489-20be3c1f0b3b'
  },
  {
    id: 4,
    name: 'Headphones',
    price: 3000,
    category: 'Electronics',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1518441902112-f8c2a9bfa0a4'
  }
];


  cart: any[] = [];

  // ADD TO CART
  addToCart(product: any) {
    const item = this.cart.find(p => p.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  updateCart(cart: any[]) {
    this.cart = cart;
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}