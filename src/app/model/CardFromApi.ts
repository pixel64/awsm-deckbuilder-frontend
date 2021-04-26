import { ImageUris } from './ImageUris';
import { CardFace } from './CardFace';

export class CardFromApi {
    name: string;
    id: string;
    image_uris: ImageUris;
    card_faces: CardFace[];
}
