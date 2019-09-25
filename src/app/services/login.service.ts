import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  public logIn({ email, password }) {
    return this.http.post<{ token: string; }>(
      `${environment.API_BASE}/auth/login`,
      { email, password }
    );
  }
}
