import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class Highlight {
  highlightColor = input<string>('yellow');

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor();
    this.el.nativeElement.style.transition = 'background-color 0.3s ease, transform 0.2s ease';
    this.el.nativeElement.style.transform = 'scale(1.02)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}
