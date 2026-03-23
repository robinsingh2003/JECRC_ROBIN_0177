import { Injectable } from '@angular/core';
import { Product } from '../product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];

  addToCart(product: Product) {
    console.log('ADDING:', product);

    const item = this.cartItems.find(
      i => i.product.productID === product.productID
    );

    if (item) {
      item.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }

    console.log('CART NOW:', this.cartItems);
  }

  getCartItems() {
    return this.cartItems;
  }

  updateQuantity(index: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(index);
    } else {
      this.cartItems[index].quantity = quantity;
    }
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  clearCart() {
    console.log('CLEARING CART'); // debug
    this.cartItems = [];
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}