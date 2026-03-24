import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  template: 
  `
  <div class = "card" *ngIf="product">
    <h2>{{product.name}}</h2>
    <p>{{product.description}}</p>
    <p>Price: {{product.price}}</p>
  </div>  
    `
})
export class ProductDetailComponent implements OnInit {
  product:any;
  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.service.getProductById(id);
  }
}
