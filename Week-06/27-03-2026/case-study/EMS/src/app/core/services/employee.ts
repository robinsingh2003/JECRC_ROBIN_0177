import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', position: 'Project Manager' },
    { id: 3, name: 'Bob Johnson', position: 'QA Engineer' },
  ];
  getEmployees() {
    return this.employees;
  }
  getEmployeeById(id: number) {
    return this.employees.find(emp => emp.id === id);
  } 
  addEmployee(emp:any) {
    this.employees.push(emp);   
  } 
  updateEmployee(updatedEmp:any) {
    const index = this.employees.findIndex(emp => emp.id === updatedEmp.id);
    if (index !== -1) {
      this.employees[index] = updatedEmp;
    }
  }
  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
  searchEmployees(term: string) {
    return this.employees.filter(emp => emp.name.toLowerCase().includes(term.toLowerCase()) || emp.position.toLowerCase().includes(term.toLowerCase()));  
  }
}