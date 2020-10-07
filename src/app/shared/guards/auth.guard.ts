import { Injectable, NgZone } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private firebaseAuth: AngularFireAuth,
    private ngZone: NgZone,) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.onAuthStateChanged((user: firebase.User) => {
        if (user) {
          resolve(true);
        } else {
          this.ngZone.run(() => {
            this.router.navigate(['/']);
          })
          resolve(false);
        }
      });
    });
  }
}
