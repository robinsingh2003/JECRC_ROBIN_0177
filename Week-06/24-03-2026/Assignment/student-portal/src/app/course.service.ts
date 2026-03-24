import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [
    new Course(1, 'Angular', 'Frontend Framework'),
    new Course(2, 'Java', 'Backend Programming'),
    new Course(3, 'Python', 'Data Science')
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }
}