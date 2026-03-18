import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTheme]',
  standalone: true
})
export class ThemeDirective implements OnChanges {

  @Input() appTheme: 'dark' | 'light' = 'light';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.appTheme === 'dark') {
      this.el.nativeElement.style.backgroundColor = '#121212';
      this.el.nativeElement.style.color = '#ffffff';
    } else {
      this.el.nativeElement.style.backgroundColor = '#ffffff';
      this.el.nativeElement.style.color = '#000000';
    }
  }
}