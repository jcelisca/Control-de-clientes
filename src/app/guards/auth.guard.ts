import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../servicios/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _loginService: LoginService, private _router: Router) {}

  canActivate(): boolean {
    console.log(this._loginService.getAuth() === null);
    if(this._loginService.getAuth() === null){
      this._router.navigate(['/login']);
      return false;
    }else{
      return true;
    }
  }


}
