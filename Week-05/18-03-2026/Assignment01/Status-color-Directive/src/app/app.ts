import { Component, signal, computed } from '@angular/core';
import { StatusColorDirective } from './status-color.directive';

@Component({
  selector: 'app-root',
  imports: [StatusColorDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  readonly students = signal([
    { name: 'John Doe', marks: 85 },
    { name: 'Jane Smith', marks: 45 },
    { name: 'Bob Johnson', marks: 72 },
    { name: 'Alice Brown', marks: 38 },
    { name: 'Charlie Wilson', marks: 92 },
    { name: 'Diana Davis', marks: 67 }
  ]);

  readonly newName = signal('');
  readonly newMarks = signal(50);

  readonly passedCount = computed(() => this.students().filter(s => s.marks >= 50).length);
  readonly failedCount = computed(() => this.students().filter(s => s.marks < 50).length);
  readonly averageMarks = computed(() => {
    const total = this.students().reduce((sum, s) => sum + s.marks, 0);
    return this.students().length ? Math.round((total / this.students().length)) : 0;
  });

  addStudent() {
    const name = this.newName();
    const marks = this.newMarks();
    if (name.trim().length > 0 && marks >= 0 && marks <= 100) {
      this.students.update(students => [...students, { name: name.trim(), marks }]);
      this.newName.set('');
      this.newMarks.set(50);
    }
  }

  clampMarks(value: number): number {
    return Math.max(0, Math.min(100, value));
  }
}
