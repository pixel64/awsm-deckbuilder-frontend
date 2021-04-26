import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardFromApi } from '../model/CardFromApi';
import { Observable } from 'rxjs';
import { Cards } from '../model/Cards';

@Injectable({
  providedIn: 'root'
})
export class CardSearchService {

  constructor(private http: HttpClient) {

  }

  public getCard(cardname: string): Observable<Cards> {
    return this.http.get('https://api.scryfall.com/cards/search?q=' + cardname) as Observable<Cards>;
  }
}
