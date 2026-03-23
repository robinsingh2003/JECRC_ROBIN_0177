import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxJsDemo } from './rsjs/rsjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RxJsDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rsjs-demo');
}
