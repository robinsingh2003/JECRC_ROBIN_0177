import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRole]',
  standalone: true
})
export class RoleDirective {
  private currentRole: string = '';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appRole(role: string) {
    this.currentRole = role;
    this.viewContainer.clear();

    const allowedRoles = role.split(',').map(r => r.trim());
    if (allowedRoles.includes(this.currentRole)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
