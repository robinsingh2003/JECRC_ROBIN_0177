import { Component } from '@angular/core';
import { ThemeDirective } from './theme';
import { UpperCasePipe } from '@angular/common';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThemeDirective,UpperCasePipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  currentTheme: 'light' | 'dark' = 'light';

  toggleTheme() {
    this.currentTheme =
      this.currentTheme === 'light' ? 'dark' : 'light';
  }

}