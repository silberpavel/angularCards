import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-cards-table',
  templateUrl: './cards-table.component.html',
  styleUrls: ['./cards-table.component.css']
})
export class CardsTableComponent implements OnInit {

  // CurrentDate: number = Date.now();
  CurrentDate = new Date();
  CurrentHour: number = this.CurrentDate.getHours();

  arrayOfCards = [
    {id: 'King', power: 88, magic: 33, img: "https://i.pinimg.com/originals/f9/6c/6e/f96c6ef6bfdad0fc074a4503fca9c40e.png"},
    {id: 'Queen1', power: 79, magic: 48, img: "https://i.pinimg.com/originals/e4/45/9f/e4459f271b4408291f5a346134d8c8c7.png"},
    {id: 'Queen2', power: 32, magic: 43, img: "https://i.pinimg.com/originals/e4/45/9f/e4459f271b4408291f5a346134d8c8c7.png"},
    {id: 'Queen3', power: 33, magic: 100, img: "https://i.pinimg.com/originals/e4/45/9f/e4459f271b4408291f5a346134d8c8c7.png"},
    {id: 'George', power: 55, magic: 12, img: "http://richardschneider.github.io/cardsJS/cards/10S.svg"}
  ];

  simpleArray = ['Audi', 'BMW', 'Opel'];

  setTextBigLenght(item: any) {
    return item.id.length <= 4 ? true : false;
  }

  whatIsOutsideNow() {
    switch (true) {
      case (this.CurrentHour >= 6 && this.CurrentHour <= 11):
        return("Morning now");
        break;
      case (this.CurrentHour >= 12 && this.CurrentHour <= 17):
        return("Midday now");
        break;
        case (this.CurrentHour >= 17 && this.CurrentHour <= 22):
        return("Evening now");
        break;
      default:
        return("Night now");
    }
  }

  ngIfElse = false;
  ngIfTest() {
    return this.ngIfElse = true;
  }


  addNewCardToArray() {

  }


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
