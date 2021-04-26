import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../User';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private userSubject: Subject<User>

  public logIn(userName: string, password: string) {
    const loginUser = {
      name: userName,
      password: password
    }
    return this.http.post("http://localhost:8080/login", loginUser)
  }

}
