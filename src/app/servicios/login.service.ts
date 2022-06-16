import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { Cliente } from '../modelo/cliente.model';

@Injectable()
export class LoginService {
  user: Cliente = { nombre: '', email: '', saldo: 0 };
  auth = getAuth(initializeApp(environment.firebase));
  db = getFirestore(initializeApp(environment.firebase));

  constructor(private router: Router) {}

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(
      () => {
        console.log(this.auth.currentUser);
        this.user.email = this.auth.currentUser?.email
          ? this.auth.currentUser?.email
          : '';
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        alert('Usuario o contraseña incorrecta');
      }
    );
  }

  getAuth() {
    console.log(this.user.email);
    console.log(this.auth.currentUser)
    return this.user;
  }

   loggedIn(){
    if(getAuth() === null){
      return false;
    }else{
      return true;
    }
  }

  logOut() {
    this.auth.signOut();
  }

  registro(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then(() => {
      console.log(this.auth.currentUser);
      this.user.email = this.auth.currentUser?.email? this.auth.currentUser?.email: '';
      this.router.navigate(['/']);
    },
    (error) => {
      alert(error);
    }
  );
  }
}
