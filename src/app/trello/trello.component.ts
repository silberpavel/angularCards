import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.css']
})
export class TrelloComponent implements OnInit {

  trelloCardsArray = [{
    name: 'Капуста',
    quan: 2
  }, {
    name: 'Кофе',
    quan: 1
  }, {
    name: 'Мороженое',
    quan: 20
  }, {
    name: 'Джахнун',
    quan: 12
  }];

  constructor() { }

  updateTcardList(card: {name: string, quan: number}) {
    this.trelloCardsArray.push(card)
  }

  ngOnInit() {
  }

}
