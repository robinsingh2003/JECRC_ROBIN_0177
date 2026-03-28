import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,   // ✅ VERY IMPORTANT
  imports: [RouterModule],
  template: `
    <nav style="background:#333; padding:10px;">
      <a routerLink="/login" style="color:white; margin-right:15px;">Login</a>
      <a routerLink="/employee" style="color:white;">Employees</a>
    </nav>
  `
})
export class NavbarComponent {}