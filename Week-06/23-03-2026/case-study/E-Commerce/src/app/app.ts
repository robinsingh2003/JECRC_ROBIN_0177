import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cart } from './cart/cart';
import { ProductList } from './product-list/product-list';
import { Checkout } from './checkout/checkout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Cart, ProductList, Checkout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

