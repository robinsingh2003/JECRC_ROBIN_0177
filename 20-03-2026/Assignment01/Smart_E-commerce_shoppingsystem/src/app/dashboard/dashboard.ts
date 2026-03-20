import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  @Input() cart: any[] = [];

  totalItems() {
    return this.cart.reduce((sum, i) => sum + i.quantity, 0);
  }
}