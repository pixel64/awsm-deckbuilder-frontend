import { Component, OnInit, Input } from '@angular/core';
import { CardFromApi } from '../model/CardFromApi';
import {ListStorageService} from '../service/list-storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('card')
  private card: CardFromApi;

  constructor(private storageService: ListStorageService) { }

  ngOnInit() {
  }

  public addCard() {
    this.storageService.addCard(this.card);
  }

}
