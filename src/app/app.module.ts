import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsTableComponent } from './cards-table/cards-table.component';
import { CardComponent } from './cards-table/card/card.component';
import { PlayCardComponent } from './play-card/play-card.component';
import { TrelloComponent } from './trello/trello.component';
import { TcardComponent } from './trello/tcard/tcard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsTableComponent,
    CardComponent,
    PlayCardComponent,
    TrelloComponent,
    TcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
