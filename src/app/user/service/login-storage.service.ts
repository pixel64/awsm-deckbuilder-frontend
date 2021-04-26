import { Injectable } from '@angular/core';
import {NgxIndexedDB} from 'ngx-indexed-db';
import {Subject} from 'rxjs';
import {User} from '../User';

@Injectable({
  providedIn: 'root'
})
export class LoginStorageService {

  private db;
  readonly subject;

  constructor() {
    this.subject = new Subject<User>();
    this.db = new NgxIndexedDB('login', 1);
    this.initDB();
  }

  public getUser(): Subject<User> {
    return this.subject;
  }

  public saveUser(user: User) {
    this.save(user);
    this.subject.next(user);
  }

  private initDB() {
    this.db.openDatabase(1, evt => {
      const objectStore = evt.currentTarget.result.createObjectStore('login', {keyPath: 'id', autoIncrement: true});

      objectStore.createIndex('key', 'key', {unique: false});
      objectStore.createIndex('user', 'user', {unique: true});
    }).then(() => this.initUser());
  }

  private initUser() {
    this.db.getByKey('login', 1).then(
        (userString) => {
          const user: User = JSON.parse((JSON.parse(JSON.stringify(userString.user))) as string);
          this.subject.next(user);
        },
        error => {
          console.error(error);
        }
    );
  }

  private save(user: User) {
    this.db.update('login', {id: 1, key: 'login', user: JSON.stringify(user)}).then(
        () => {
        },
        error => {
          console.error(error);
        }
    );
  }

  private mapToJson(map) {
    return JSON.stringify([...map]);
  }

  private jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
  }
}
