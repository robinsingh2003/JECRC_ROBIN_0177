import { Component } from '@angular/core';
import { Weather } from './weather.interface';
import { WeatherComponent } from './weather/weather';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  cityData: Weather[] = [
    { name: 'London', temperature: '15°C', wind: '10km/h', humidity: '75%' },
    { name: 'New York', temperature: '22°C', wind: '12km/h', humidity: '60%' },
    { name: 'Tokyo', temperature: '18°C', wind: '8km/h', humidity: '68%' },
    { name: 'Paris', temperature: '20°C', wind: '9km/h', humidity: '70%' }
  ];
} 