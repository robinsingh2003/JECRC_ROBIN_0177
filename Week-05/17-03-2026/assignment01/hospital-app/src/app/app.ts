import { Component } from '@angular/core';
import { BookingComponent } from './booking/booking';
import { SummaryComponent } from './summary/summary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookingComponent, SummaryComponent],
  templateUrl: './app.html',
})
export class AppComponent {

  appointmentData: any = {};

  // receive data from child
  updateData(data: any) {
    this.appointmentData = data;
  }
}