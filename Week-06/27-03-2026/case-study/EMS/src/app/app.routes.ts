import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { EmployeeListComponent } from './employee/employeelist/employeelist';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { 
    path: 'employee', 
    component: EmployeeListComponent, 
    canActivate: [AuthGuard] 
  }
];  