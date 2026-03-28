import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private api = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.api}/${id}`);
  }
  
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.api, task);
  }
  // update full task (put) 
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.api}/${task.id}`, task);
  }
  // partial update patch method to update only the status of a task
  updateTaskStatus(id: number, status: string): Observable<Task> {
    return this.http.patch<Task>(`${this.api}/${id}`, { completed: status === 'completed' });
  }
  // generic patch method for partial updates
  updatePartial(id:number,data: Partial<Task>): Observable<Task> {
    return this.http.patch<Task>(`${this.api}/${id}`, data);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
  searchTasks(query: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.api}?q=${query}`);
  }
}
