import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[statusColor]',
  standalone: true
})
export class StatusColorDirective implements OnInit {
  @Input() statusColor!: number; // marks out of 100

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const isPassed = this.statusColor >= 50;
    const bgColor = isPassed ? '#d4edda' : '#f8d7da';
    const textColor = isPassed ? '#155724' : '#721c24';
    
    this.renderer.setStyle(this.el.nativeElement, 'background-color', bgColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', textColor);
    this.renderer.setStyle(this.el.nativeElement, 'padding', '0.5rem 1rem');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '20px');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-block');
    this.renderer.setStyle(this.el.nativeElement, 'min-width', '60px');
    this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
  }
}

