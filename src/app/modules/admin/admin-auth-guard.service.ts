import { Injectable } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminAuthGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // if(this.auth.isAdmin){
    //   return true;
    // }else{
    //   this.router.navigate(['/admin/login']);
    // }
    if(this.auth.isLoggedIn){
      return true;
    }else{
      return false;
    }
  }
  constructor(private auth:AuthService,private router:Router) { }
}
