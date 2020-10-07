import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
    private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
    this.firebaseAuth.idToken.subscribe(token => {
      localStorage.setItem('user', (token) ? token : null);
    })
  }


  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
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

  SignOut() {
    return this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.ngZone.run(() => {
        this.router.navigate(['']);
      })
    })
  }
}