import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleDirective } from '../role';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RoleDirective],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  role = 'admin';

  setRole(newRole: string): void {
    this.role = newRole;
  }
}
