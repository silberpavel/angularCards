import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.css']
})
export class TrelloComponent implements OnInit {

  trelloName: string = '';
  trelloQuan: number;
  
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

  addNewTcard() {
    this.trelloCardsArray.push({
      name: this.trelloName,
      quan: this.trelloQuan
    });
    this.trelloName = '';
    this.trelloQuan;
  }

  constructor() { }

  ngOnInit() {
  }

}
