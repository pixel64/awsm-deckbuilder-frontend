import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardSearchModuleComponent} from './card-search-module/card-search-module.component';
import {HttpClientModule} from '@angular/common/http';
import {CardViewComponent} from './card-view/card-view.component';
import {CardComponent} from './card/card.component';
import {DecklistComponent} from './decklist/decklist.component';
import {ListStorageService} from './service/list-storage.service';
import {FormsModule} from '@angular/forms';

import { DecksListComponent } from './decks-list/decks-list.component';
import {UserModule} from './user/user.module';

@NgModule({
    declarations: [
        AppComponent,
        CardSearchModuleComponent,
        CardViewComponent,
        CardComponent,
        DecklistComponent,
        DecksListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        UserModule
    ],
    providers: [ListStorageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
