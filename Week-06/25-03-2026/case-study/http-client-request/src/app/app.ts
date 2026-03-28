import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list';
import { TaskFormComponent } from './task-form/task-form';  

@Component({
  selector: 'app-root',
  imports: [ CommonModule , TaskListComponent, TaskFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('http-client-request');
}
