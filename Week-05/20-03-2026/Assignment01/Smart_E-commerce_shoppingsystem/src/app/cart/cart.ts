import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {

  @Input() cart: any[] = [];
  @Output() cartChange = new EventEmitter();

  increase(item: any) {
    item.quantity++;
    this.cartChange.emit(this.cart);
  }

  decrease(item: any) {
    if (item.quantity > 1) item.quantity--;
    this.cartChange.emit(this.cart);
  }

  remove(item: any) {
    this.cart = this.cart.filter(i => i.id !== item.id);
    this.cartChange.emit(this.cart);
  }

  getTotal(item: any) {
    return item.price * item.quantity;
  }
}