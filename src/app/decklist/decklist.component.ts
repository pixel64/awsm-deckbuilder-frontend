import {Component, OnInit} from '@angular/core';
import {Card} from '../model/Card';
import {ListStorageService} from '../service/list-storage.service';

@Component({
    selector: 'app-decklist',
    templateUrl: './decklist.component.html',
    styleUrls: ['./decklist.component.scss']
})
export class DecklistComponent implements OnInit {

    deckList: Map<string, Card>;
    cardList: Card[];

    constructor(private storageService: ListStorageService) {
        this.deckList = new Map();
        this.cardList = [];
    }

    ngOnInit() {
        this.storageService.getCards().subscribe((payload) => {
            this.deckList = payload;
            const newCardList: Card[] = [];
            this.deckList.forEach((card) => {
                newCardList.push(card);
            });
            this.cardList = newCardList;
        });
    }

    remove(pile: Card) {

        const card = pile.card;
        if (this.deckList.has(card.id)) {
            this.storageService.removeCard(card);
        }
    }
}
