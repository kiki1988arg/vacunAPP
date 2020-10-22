import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Institute, User } from '../interfaces/interfaces';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FacadeService {


  baseUrl = environment.url;
  signInUrl = this.baseUrl + 'User/SignIn';
  loginUrl = this.baseUrl + 'User/Login'
  instituteUrl = this.baseUrl + 'Institute'
  constructor(private http: HttpClient) { }

  signIn(user: User): Observable<User> {
    return this.http.post<User>(this.signInUrl, user);
  }

  Login({ userName: userName, password: string }): Observable<User> {
    return this.http.post<User>(this.loginUrl, { userName: userName, password: string });
  }

  getInstitutes(): Observable<Institute[]> {
    return this.http.get<Institute[]>(this.instituteUrl);
  }
}
