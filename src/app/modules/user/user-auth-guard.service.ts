import { Injectable } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UserAuthGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isLoggedIn 
      && !this.auth.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
  constructor(private auth: AuthService, private router: Router) { }
  
}
