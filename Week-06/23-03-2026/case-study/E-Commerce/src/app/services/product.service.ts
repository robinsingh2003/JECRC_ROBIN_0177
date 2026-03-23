import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    { productID: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { productID: 2, name: 'Smartphone', price: 699.99, category: 'Electronics' },
    { productID: 3, name: 'Tablet', price: 499.99, category: 'Electronics' },
    { productID: 4, name: 'Headphones', price: 199.99, category: 'Accessories' },
    { productID: 5, name: 'Keyboard', price: 89.99, category: 'Accessories' },
    { productID: 6, name: 'Mouse', price: 49.99, category: 'Accessories' },
    { productID: 7, name: 'Monitor', price: 299.99, category: 'Electronics' },
    { productID: 8, name: 'Printer', price: 159.99, category: 'Electronics' },
    { productID: 9, name: 'Smartwatch', price: 249.99, category: 'Wearables' },
    { productID: 10, name: 'Speaker', price: 129.99, category: 'Audio' },
    { productID: 11, name: 'Power Bank', price: 39.99, category: 'Accessories' },
    { productID: 12, name: 'Camera', price: 899.99, category: 'Electronics' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  // 🔍 Search by name
  searchProducts(searchText: string): Product[] {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // 📂 Filter by category
  getProductsByCategory(category: string): Product[] {
    if (category === 'All') return this.products;

    return this.products.filter(p => p.category === category);
  }
}