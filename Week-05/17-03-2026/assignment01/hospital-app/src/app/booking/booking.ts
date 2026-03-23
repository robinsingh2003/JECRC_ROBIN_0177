import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking.html',
})
export class BookingComponent {

  @Output() dataChange = new EventEmitter<any>();

  patientName = '';
  doctor = '';
  date = '';
  type = '';
  symptoms = '';

  doctors = ['Dr. Sharma', 'Dr. Mehta', 'Dr. Gupta'];

  today = new Date().toISOString().split('T')[0];

  update() {
    const fee = this.type === 'Online' ? 300 : this.type === 'Offline' ? 500 : 0;

    this.dataChange.emit({
      patientName: this.patientName,
      doctor: this.doctor,
      date: this.date,
      type: this.type,
      symptoms: this.symptoms,
      fee: fee
    });
  }
}