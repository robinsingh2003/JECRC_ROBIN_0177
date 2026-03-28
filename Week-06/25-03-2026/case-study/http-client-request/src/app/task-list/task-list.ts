import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
  standalone  : true,
  imports: [CommonModule, FormsModule]
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }
  toggleTask(task: Task) {
  const updatedTask = { ...task, completed: !task.completed };

  this.taskService.updateTask(updatedTask).subscribe(() => {
    this.loadTasks();
  });
}

deleteTask(id: number) {
  this.taskService.deleteTask(id).subscribe(() => {
    this.loadTasks();
  });
}

loadTasks() {
  this.taskService.getTasks().subscribe(data => {
    console.log('TASKS:', data); // 👈 check this
    this.tasks = data;
  });
}
}