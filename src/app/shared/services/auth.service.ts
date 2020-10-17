import { Injectable, } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { FacadeService } from './facade.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private router: Router,
    private facade: FacadeService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  signIn(user: User) {
    return this.facade.signIn(user)
  }

  login(loginForm) {
    this.facade.Login(loginForm).subscribe(
      (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigate(['/user']);
      });
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  logOut() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }
}

enum AUTH_ERROR_CODE {
  Not_found = "auth/user-not-found",
  Wrong_password = 'auth/wrong-password',
  Too_many_requests = 'auth/too-many-requests'
}