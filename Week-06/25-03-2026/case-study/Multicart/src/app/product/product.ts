import { Component } from '@angular/core';
// import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
  providers: [CartService]
})
export class Product {
  products = [
    { id: 1, name: 'Phone', price: 699 },
    { id: 2, name: 'Laptop', price: 999 },
    { id: 3, name: 'Headphones', price: 199 }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product.name);
    alert(`${product.name} added to cart!`);
  }
  getCartItems() {
    return this.cartService.getCartItems();
  }
}
