import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeFormComponent } from './employee/employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, EmployeeFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class FeedbackFormComponent {
  isDark = this.loadTheme();

  protected readonly title = signal('Angular Forms Demo');

  // ✅ FIXED spelling
  departments = ['HR', 'Development', 'Design', 'QA'];

  allSkills = ['Angular', 'React', 'Node', 'Python'];

  feedback = {
    name: '',
    email: '',
    department: '',
    rating: '',
    comments: '',
    skills: [] as string[]
  };

  // ✅ FIXED function name
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Feedback Submitted:', this.feedback);
      alert(JSON.stringify(this.feedback, null, 2));

      form.resetForm();
      this.feedback.skills = [];
    } else {
      alert('Please fill out all required fields.');
    }
  }

  updateSkills(skill: string, isChecked: boolean) {
    if (isChecked) {
      this.feedback.skills.push(skill);
    } else {
      const index = this.feedback.skills.indexOf(skill);
      if (index > -1) {
        this.feedback.skills.splice(index, 1);
      }
    }
  }

  loadTheme(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }

  toggleDark() {
    this.isDark = !this.isDark;
    localStorage.setItem('darkMode', this.isDark.toString());
    document.body.classList.toggle('dark-mode', this.isDark);
  }
}

