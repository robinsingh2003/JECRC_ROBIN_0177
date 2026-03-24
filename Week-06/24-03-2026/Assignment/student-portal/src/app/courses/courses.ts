import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.html'
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
}