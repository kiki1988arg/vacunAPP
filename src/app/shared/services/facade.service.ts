import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Institute, Notebook, Person, User, Vaccine } from '../interfaces/interfaces';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FacadeService {


  baseUrl = environment.url;
  signInUrl = this.baseUrl + 'User/SignIn';
  loginUrl = this.baseUrl + 'User/Login'
  professionalUrl = this.baseUrl + 'Professional/Login'
  instituteUrl = this.baseUrl + 'Center'
  vacinneUrl = this.baseUrl + 'Vaccine/Group'
  personUrl = this.baseUrl + 'Person'
  notebookUrl = this.baseUrl + 'Notebook'
  constructor(private http: HttpClient) { }

  signIn(user: User): Observable<User> {
    return this.http.post<User>(this.signInUrl, user);
  }

  Login({ userName: userName, password: string }): Observable<User> {
    return this.http.post<User>(this.loginUrl, { userName: userName, password: string });
  }

  LoginProf({ userName: userName, password: string }): Observable<User> {
    return this.http.post<User>(this.professionalUrl, { userName: userName, password: string });
  }

  getInstitutes(): Observable<Institute[]> {
    return this.http.get<Institute[]>(this.instituteUrl);
  }

  getVacinnes(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(this.vacinneUrl);
  }

  getPersons() {
    return this.http.get<Person[]>(this.personUrl + "/me");
  }
  getPersonById(id: number) {
    return this.http.get<Person>(this.personUrl + `/${id}`);
  }

  createUser(person) {
    return this.http.post<void>(this.personUrl, person)
  }

  getNextVaccines(months: string) {
    return this.http.get<any>(this.notebookUrl + `/${months}`);
  }

  getNextVaccinesCount() {
    return this.http.get<number>(this.notebookUrl + `/count`);
  }

  AddSelfNotebook(nb: Notebook) {
    return this.http.post<Notebook>(this.notebookUrl, nb);
  }

  AddNotebook(nb: Notebook) {
    return this.http.post<Notebook>(this.notebookUrl + "/validate", nb);
  }

  updateNotebook(nb: Notebook) {
    return this.http.put<Notebook>(this.notebookUrl, nb);
  }

  SearchPerson(nif: string) {
    return this.http.get<Person>(this.personUrl + `/${nif}`);
  }


}
