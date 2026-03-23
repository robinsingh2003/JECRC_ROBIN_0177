import { Component } from '@angular/core';
import { PriceHighlightDirective } from './price-highlight';

@Component({
  selector: 'app-root',
  standalone: true,   // ✅ IMPORTANT
  imports: [PriceHighlightDirective],  // ✅ correct import
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // ✅ FIXED
})
export class App {}