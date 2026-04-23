import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Weather } from '../weather.interface';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.html',
  styleUrls: ['./weather.css']
})
export class WeatherComponent implements OnInit {
  @Input() weatherData: Weather[] = []; // Array passed from parent
  
  searchCity: string = '';
  cityDetails: Weather | null = null;
  showNoResults: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onInputChange() {
    const trimmedInput = this.searchCity.trim();

    if (!trimmedInput) {
      // If nothing is typed, do not render weather details or "No Results"
      this.cityDetails = null;
      this.showNoResults = false;
      return;
    }

    // Case-insensitive search
    const result = this.weatherData.find(
      city => city.name.toLowerCase() === trimmedInput.toLowerCase()
    );

    if (result) {
      this.cityDetails = result;
      this.showNoResults = false;
    } else {
      this.cityDetails = null;
      this.showNoResults = true;
    }
  }
}