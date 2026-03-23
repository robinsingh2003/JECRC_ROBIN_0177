import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTANT
import { RouterModule } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {

  products: Product[] = [];
  cartItemCount = 0;

  // 🔍 Search + Category
  searchText: string = '';
  selectedCategory: string = 'All';

  categories: string[] = ['All', 'Electronics', 'Accessories', 'Wearables', 'Audio'];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.updateCartCount();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.updateCartCount();
  }

  // 🔍 Search + Filter logic
  filterProducts() {
    let filtered = this.productService.getProducts();

    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    if (this.searchText) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    this.products = filtered;
  }

  private updateCartCount() {
    this.cartItemCount = this.cartService
      .getCartItems()
      .reduce((sum, item) => sum + item.quantity, 0);
  }
}