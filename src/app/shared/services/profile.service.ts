import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = environment.url;
  private endPoint = "/Vaccine"
  constructor() { }
}
