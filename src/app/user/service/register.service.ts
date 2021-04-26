import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public registerUser(name: string, password: string, email: string) {
    const userForRegistration = {
      name: name,
      password: password,
      email: email
    }

    return this.http.post('http://localhost:8080/register', userForRegistration);
  }
}
