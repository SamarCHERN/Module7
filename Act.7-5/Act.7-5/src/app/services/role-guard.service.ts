// src/app/auth/role-guard.service.ts
import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('jwt') as string;
    // decode the token to get its payload
    // const tokenPayload = decode(token);
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    console.log(tokenPayload.roles[0]);
    if (
      !this.auth.isAuthenticated() || 
      tokenPayload.roles[0] !== expectedRole
    ) {
     window.alert('acces interdit')
      return false;
    }
    return true;
  }
}