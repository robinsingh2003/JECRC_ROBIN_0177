import { Component } from '@angular/core';
import { ClickBlockDirective } from './click-block';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClickBlockDirective],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  allowClick1 = true;
  allowClick2 = false;

}