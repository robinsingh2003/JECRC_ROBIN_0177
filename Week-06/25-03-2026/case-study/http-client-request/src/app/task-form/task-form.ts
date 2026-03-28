import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl : './task-form.html',
  styleUrl : './task-form.css',
  imports: [FormsModule, CommonModule]
})
export class TaskFormComponent {

  newTask: Task = {
    title: '',
    completed: false
  };

  constructor(private taskService: TaskService) {}

  addTask() {
    this.taskService.addTask(this.newTask).subscribe(() => {
      alert('Task added!');
      this.newTask = { title: '', completed: false };
    });
  }
}