import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get loggedIn(): boolean {
    return this._loggedIn;
  }
  get token(): string {
    return this._token;
  }
  get name(): string {
    return this._name;
  }

  private _name: string;
  private _loggedIn = false;
  private _token: string;

  constructor() { }

  public setLoggedInUser(name: string, token: string, loggedIn: boolean) {
    this._name = name;
    this._loggedIn = loggedIn;
    this._token = token;
  }

  public getLoginState(): boolean {
    return this._loggedIn;
  }

  public logOut() {
    this._loggedIn = false;
    this._token = '';
    this._name = '';
  }
}
