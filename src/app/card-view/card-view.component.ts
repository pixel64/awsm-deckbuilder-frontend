import { Component, OnInit, Input } from '@angular/core';
import { CardFromApi } from '../model/CardFromApi';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @Input("cards")
  private cardList: CardFromApi[];
  @Input("loading")
  private loading: boolean;
  constructor() {
  }

  ngOnInit() {
  }
}
