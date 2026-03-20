import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CommonModule, AsyncPipe, DatePipe, KeyValuePipe } from '@angular/common';
import { CustomcurrencyPipe } from './customcurrency-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    DatePipe,
    KeyValuePipe,
    CustomcurrencyPipe
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  today = new Date();

  data$ = of([
    {
      id: 1,
      productName: "Laptop",
      price: 50000,
      status: "Delivered",
    },
    {
      id: 2,
      productName: "Mobile",
      price: 20000,
      status: "Pending"
    }
  ]);

  sampleProduct = { name: 'Laptop', price: 50000 };

}