import {Injectable} from '@angular/core';
import {CardFromApi} from '../model/CardFromApi';
import {Card} from '../model/Card';
import {Subject} from 'rxjs';
import {NgxIndexedDB} from 'ngx-indexed-db';

@Injectable({
    providedIn: 'root'
})
export class ListStorageService {
    deckList: Map<string, Card>;
    readonly subject;
    private db;

    constructor() {
        this.deckList = new Map();
        this.subject = new Subject<Map<string, Card>>();
        this.db = new NgxIndexedDB('cardLists', 1);
        this.initDB();
    }

    public getCards(): Subject<Map<string, Card>> {
        return this.subject;
        // this.initList();
    }

    public addCard(card: CardFromApi) {
        if (this.deckList.has(card.id)) {
            this.addCardToHashmap(card);
        } else {
            this.deckList.set(card.id, new Card(card, 1));
        }
        this.subject.next(this.deckList);
        this.saveList();
    }

    private addCardToHashmap(card: CardFromApi) {
        const cardPileCount = this.deckList.get(card.id).count + 1;
        this.deckList.get(card.id).count = cardPileCount;
    }

    public removeCard(card: CardFromApi) {
        if (this.deckList.has(card.id)) {
            this.removeCardFromHashmap(card);

            this.subject.next(this.deckList);
            this.saveList();
        }
    }

    private removeCardFromHashmap(card: CardFromApi) {
        const cardPileCount = this.deckList.get(card.id).count - 1;
        if (cardPileCount === 0) {
            this.deckList.delete(card.id);
            return;
        }
        this.deckList.get(card.id).count = cardPileCount;
    }

    private saveList() {
        this.db.update('decklist', {id: 1, key: 'decklist', list: this.mapToJson(this.deckList)}).then(
            () => {
            },
            error => {
                console.error(error);
            }
        );
    }

    private initDB() {
        this.db.openDatabase(5, evt => {
            const objectStore = evt.currentTarget.result.createObjectStore('decklist', {keyPath: 'id', autoIncrement: true});

            objectStore.createIndex('key', 'key', {unique: false});
            objectStore.createIndex('list', 'list', {unique: true});
        }).then(() => this.initList());
    }

    private initList() {
        this.db.getByKey('decklist', 1).then(
            list => {
                const cardMap = this.jsonToMap(list.list as Map<string, Card>) as Map<string, Card>;
                this.deckList = cardMap;
                this.subject.next(cardMap);
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
