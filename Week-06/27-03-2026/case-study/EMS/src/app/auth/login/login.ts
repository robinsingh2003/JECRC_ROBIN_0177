import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="login-container">
      <h2>Employee Management System - Login</h2>
      <form (ngSubmit)="login()" class="login-form">
        <div class="form-group">
          <label for="username">Username:</label>
          <input 
            id="username"
            [(ngModel)]="username" 
            name="username"
            placeholder="Enter your username"
            required>
        </div>

        <div class="form-group">
          <label for="password">Password:</label>
          <input 
            id="password"
            [(ngModel)]="password" 
            name="password"
            type="password" 
            placeholder="Enter your password"
            required>
        </div>

        <button type="submit" class="login-btn">Login</button>

        <div class="error-message" *ngIf="error">{{ error }}</div>
      </form>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }

    h2 {
      text-align: center;
      color: #333;
      margin-bottom: 20px;
    }

    .login-form {
      display: flex;
      flex-direction: column;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #555;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      box-sizing: border-box;
    }

    input:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    .login-btn {
      padding: 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .login-btn:hover {
      background-color: #0056b3;
    }

    .error-message {
      color: #dc3545;
      text-align: center;
      margin-top: 10px;
      font-weight: bold;
    }
  `]
})
export class LoginComponent {

  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    console.log(this.username, this.password); // debug

    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/employee']);   // ✅ match your route
    } else {
      this.error = 'Invalid Credentials';
    }
  }
}