import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  template: `
    <h1>404 Page Not Found</h1>
    <p>Invalid URL</p>
  `
})
export class ErrorComponent {}