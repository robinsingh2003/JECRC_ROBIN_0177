import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // REQUIRED

import { App } from './app';
import { WeatherComponent } from './weather/weather';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    App,
    WeatherComponent
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }