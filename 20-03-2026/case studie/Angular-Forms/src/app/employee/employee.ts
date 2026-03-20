import { Component } from '@angular/core';
import {
  ReactiveFormsModule, FormGroup, FormControl, Validators,FormArray,FormRecord
}
from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class EmployeeFormComponent {
//  formControl(singlefiels)
 name = new FormControl('',Validators.required);
//  formGroup(structured data)
account = new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(6)])
})
// formArray(dyanmic list)
skills = new FormArray([
  new FormControl('Angular'),
]);
// formRecord(dynamic object)
preferences = new FormRecord({
  darkMode: new FormControl(true),
  notifications: new FormControl(false),
});
// +ADD new skill
addSkill(skill: string) {
  this.skills.push(new FormControl());
}
// remove skill
removeSkill(index: number) {
  this.skills.removeAt(index);
}
// +ADD preference dynamically
addPreference(){
  const key = 'pref_' + Object.keys(this.preferences.controls).length;
  this.preferences.addControl(key, new FormControl(false));
}
// Submit Form
submit(){
  const data = {
    name:this.name.value,
    account:this.account.value,
    skills:this.skills.value,
    preferences:this.preferences.value
  }
  console.log('Employee Data:',data);
  alert(JSON.stringify(data,null,2));     
  }
}
  