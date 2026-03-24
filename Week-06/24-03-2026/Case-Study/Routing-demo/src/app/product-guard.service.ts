import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot,Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class ProductGuardService implements CanActivate {
  constructor(private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = Number(route.paramMap.get('id'));
    if (isNaN(id) || id < 1) {
      alert('Invalid product ID. Redirecting to product list.');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  } 
}
