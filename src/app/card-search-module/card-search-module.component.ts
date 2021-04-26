import { Component, OnInit } from '@angular/core';
import { CardSearchService } from '../service/card-search.service';
import { CardFromApi } from '../model/CardFromApi';

@Component({
  selector: 'app-card-search-module',
  templateUrl: './card-search-module.component.html',
  styleUrls: ['./card-search-module.component.scss']
})
export class CardSearchModuleComponent implements OnInit {

  cardList: CardFromApi[];
  loading: boolean;
  constructor(private cardSearchService: CardSearchService) { }

  ngOnInit() {
  }
  searchCard(name: string) {
    this.loading = true;
    this.cardSearchService.getCard(name).subscribe(e => {
      if (e.data !== null && e.data.length > 0) {
        this.cardList = e.data;
        this.loading = false;
      }
    },
     error => this.loading = false
    );
  }
}
