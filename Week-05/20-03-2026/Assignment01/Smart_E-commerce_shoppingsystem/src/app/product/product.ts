import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent {

  @Input() products: any[] = [];
  @Output() add = new EventEmitter();

  search = '';
  category = '';

  filteredProducts() {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.search.toLowerCase()) &&
      (this.category ? p.category === this.category : true)
    );
  }
}