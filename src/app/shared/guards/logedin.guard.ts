import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogedinGuard implements CanActivate {
  constructor(private router: Router,
    private firebaseAuth: AngularFireAuth,
    private ngZone: NgZone) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.onAuthStateChanged((user: firebase.User) => {
        if (user) {
          this.ngZone.run(() => {
            this.router.navigate(['/user']);
          })

          resolve(false);

        } else {
          resolve(true);
        }
      });
    });
  }
}
