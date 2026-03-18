import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,                // ✅ IMPORTANT
  imports: [CommonModule],         // ✅ IMPORTANT
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class StudentComponent {

  students = [
    { name: 'Amit', marks: 92 },
    { name: 'Priya', marks: 75 },
    { name: 'Rahul', marks: 45 },
    { name: 'Sneha', marks: 60 },
    { name: 'Karan', marks: 30 }
  ];

  getGrade(marks: number) {
    if (marks >= 90) return 'A';
    else if (marks >= 75) return 'B';
    else if (marks >= 50) return 'C';
    else return 'F';
  }
}