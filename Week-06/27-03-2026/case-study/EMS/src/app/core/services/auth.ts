import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'dummy-token');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}