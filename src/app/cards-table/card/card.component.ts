import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardName: string= 'Circuit Breaker';
  cardImage = 'https://5.imimg.com/data5/RJ/PY/MY-11562402/schneider-acti-9-c-curve-1p-miniature-circuit-breaker-500x500.png';
 

  getCardName() {
    return this.cardName;
  }

  constructor() { }

  ngOnInit() {
  }

}
