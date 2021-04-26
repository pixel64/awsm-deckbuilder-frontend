import { CardFromApi } from './CardFromApi';

export class Card {
    public count;
    public card: CardFromApi;

    constructor(card: CardFromApi, count: number) {
        this.count = count;
        this.card = card;
    }
}
