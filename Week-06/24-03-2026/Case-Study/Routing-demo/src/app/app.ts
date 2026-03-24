import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , RouterLink],
  template: `
  <h1>Angular routing Demo</h1>
  <nav>
  <a routerLink= "/home">Home</a>
  <a routerLink= "/contact">contact</a>
  <a routerLink= "/product">product</a>
  // <a routerLink= "/product/1">product-1</a>
  </nav>
  <br>
  <router-outlet></router-outlet>
  `
})
export class App {
  protected readonly title = signal('Routing-demo');
}
