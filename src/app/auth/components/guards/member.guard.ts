import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MemberGuard implements CanActivate {

  constructor(private authService: AuthService){}

  canActivate(): boolean {
    if(this.authService.loggedIn2()){
      return true;

    } else {
      return false;
    }
  }

}
