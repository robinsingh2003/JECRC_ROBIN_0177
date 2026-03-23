import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true, // ✅ VERY IMPORTANT
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hellocompnent {}