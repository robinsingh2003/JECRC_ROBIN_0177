import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pizza } from './pizza/pizza';
@Component({
  selector: 'app-root',
  standalone:true , 
  imports: [Pizza],
  template: '<app-pizza></app-pizza>',
  // styleUrl : '<app-pizza></app-pizza>',
})
export class App {
  protected readonly title = signal('pizza-app');
}
