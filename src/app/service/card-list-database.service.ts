import { Injectable } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { CardFromApi } from '../model/CardFromApi';


@Injectable({
  providedIn: 'root'
})
export class CardListDatabaseService {

  private db;

  constructor() {
    this.db = new NgxIndexedDB('card-list', 1);
  }


}
