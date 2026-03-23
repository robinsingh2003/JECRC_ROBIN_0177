import { Component, signal } from '@angular/core';
import { Highlight } from './highlight';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  readonly title = signal('Custom Directives App');
}
