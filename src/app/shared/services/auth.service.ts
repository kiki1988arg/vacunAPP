import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private firebaseAuth: AngularFireAuth,
    private _snackBar: MatSnackBar) {
    this.user = firebaseAuth.authState;
    this.firebaseAuth.idToken.subscribe(token => {
      localStorage.setItem('token', (token) ? token : null);
    })
  }


  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error: firebase.FirebaseError) => {
        if (error.code == AUTH_ERROR_CODE.Not_found)
          this._snackBar.open("Verificá el mail ingresado sea el correcto", "ERROR", {
            duration: 5000,
          });
        if (error.code == AUTH_ERROR_CODE.Wrong_password)
          this._snackBar.open("Verificá el mail / password ingresado sea el correcto", "ERROR", {
            duration: 5000,
          });
        if (error.code == AUTH_ERROR_CODE.Too_many_requests)
          this._snackBar.open("Has intentado entrar a la cuenta muchas veces", "ERROR", {
            duration: 5000,
          });
      })
  }

  loginWithGoogle() {
    this.firebaseAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  loginWithTwitter() {
    this.firebaseAuth.signInWithPopup(new auth.TwitterAuthProvider());
  }
  loginWithFacebook() {
    this.firebaseAuth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  signOut() {
    return this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.ngZone.run(() => {
        this.router.navigate(['']);
      })
    })
  }
}

enum AUTH_ERROR_CODE {
  Not_found = "auth/user-not-found",
  Wrong_password = 'auth/wrong-password',
  Too_many_requests = 'auth/too-many-requests'
}