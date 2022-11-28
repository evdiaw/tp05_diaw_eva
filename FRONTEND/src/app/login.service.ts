import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = environment.api;

  constructor(private httpClient: HttpClient) {
   }

   login(login: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.url+"login", {login: login, password: password});
  }
}
