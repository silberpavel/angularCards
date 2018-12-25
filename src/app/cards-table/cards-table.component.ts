import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-table',
  templateUrl: './cards-table.component.html',
  styleUrls: ['./cards-table.component.css']
})
export class CardsTableComponent implements OnInit {


  addNewCard = false;
  addCardStatus = '';

  inputText = '';
  inputText2 = '';
  inputText3 = '';
  inputText4 = '';

  twoWayBinding = '';

  addCard() {
    this.addCardStatus = 'New card add';
  }

  onKeyUp(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  onTyping(value) {
    this.inputText2 = value;
  }

  onEnterText(event) {
    if(event.code === 'Enter')
      this.inputText3 = event.target.value; 
  }

  onEnterText4(event) {
    this.inputText4 = event.target.value; 
  }

  constructor() {
    setTimeout(() => {
      this.addNewCard = true;
    }, 5000); 
   }

  ngOnInit() {
  }

}
