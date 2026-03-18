import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ add FormsModule
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  title = 'User';

  users = [
    "john",
    "michael",
    "susan",
    "linda",
    "robert",
    "james",
  ];

  user = { name: 'john', age: 30 };

  newUser = ''; // ✅ for input

  getGreeting() {
    return 'Welcome to Angular: ' + this.user.name;
  }

  addUser() {
    this.users.push(this.newUser);
    this.newUser = '';
  }
}