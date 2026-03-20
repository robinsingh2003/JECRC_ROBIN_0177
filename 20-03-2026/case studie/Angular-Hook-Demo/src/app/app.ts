import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderParentComponent } from './order-parent/order-parent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, OrderParentComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}