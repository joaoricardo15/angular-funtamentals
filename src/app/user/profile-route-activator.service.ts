import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { AuthService } from './auth.service';

@Injectable()
export class ProfileRouteActivator implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {
    
  }

  canActivate() {
    if(this.authService.currentUser)
      return true
    return this.router.navigate([''])
  }
}