// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-employee-list',
//   imports: [],
//   template:
//   `<h2>Employee-List</h2>
//     <ul>
//       <li *ngFor="let emp of employees">
//         {{emp.name}} - {{emp.role}}
//       </li>
//     </ul>
//   `
// })
// export class EmployeeListComponent {
//   employee: any[] = [];
//   constructor(private service: EmployeeService){
//     this.employees= this.service.getEmployees();
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { EmployeeService } from '../../core/services/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,  // ✅ if using standalone
  imports: [CommonModule],  // ✅ important
  template: `
    <h2>Employee List</h2>
    <ul>
      <li *ngFor="let emp of employees">
        {{ emp.name }} - {{ emp.role }}
      </li>
    </ul>
  `
})
export class EmployeeListComponent {
  employees: any[] = [];

  constructor(private service: EmployeeService) {
    this.employees = this.service.getEmployees();
  }
}