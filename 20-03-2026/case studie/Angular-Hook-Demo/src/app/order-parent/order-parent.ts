import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderChildComponent } from '../order-child/order-child';

@Component({
  selector: 'app-order-parent',
  standalone: true,
  imports: [CommonModule, OrderChildComponent],
  templateUrl: './order-parent.html',
  styleUrls: ['./order-parent.css']
})
export class OrderParentComponent {

  order = {
    id: 1,
    product: 'Laptop',
    price: 50000
  };

  showChild = true;
  logs: { message: string, type: string, time: string }[] = [];

  updateOrder() {
    this.order = {
      id: this.order.id + 1,
      product: 'Mobile',
      price: 20000
    };
  }

  toggleChild() {
    this.showChild = !this.showChild;

    if (this.showChild) {
      this.addLog("🟢 Child Component Created", "create");
    } else {
      this.addLog("🔴 Child Component Destroyed", "destroy");
    }
  }

  addLog(message: string, type: string = 'info') {
    const time = new Date().toLocaleTimeString();
    this.logs.unshift({ message, type, time });
  }

  clearLogs() {
    this.logs = [];
  }
}