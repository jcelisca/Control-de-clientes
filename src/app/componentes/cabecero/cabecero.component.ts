import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn: boolean = false;
  loggedInUser: string = '';

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.loginService.getAuth()?.email)
    if(this.loginService.getAuth() != null){
      this.isLoggedIn = true;
      var ma = this.loginService.getAuth()?.email;
      this.loggedInUser = ma ? ma : '';
    }

  }

  logout(){
    this.loginService.logOut();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
