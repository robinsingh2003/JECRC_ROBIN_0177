import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hellocompnent } from './hello/hello'; // ✅ add this
import { Homecomponent } from './home/home';
import { Productcomponent } from './product/product';
import { Usercomponent } from './user/user';  

@Component({
  selector: 'app-root',
  standalone: true, // ✅ REQUIRED
  imports: [RouterOutlet, Hellocompnent, Homecomponent, Productcomponent, Usercomponent], // ✅ add this
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { // ✅ better naming
  protected readonly title = signal('Robin');
}