import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: string[] = [];
  
  addToCart(item: string) {
    this.items.push(item);
  }
  getCartItems(): string[] {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
