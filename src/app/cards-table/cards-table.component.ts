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

  whatIsOutsideNow() {
    switch (true) {
      case (this.CurrentHour >= 6 && this.CurrentHour <= 11):
        console.log("Morning now");
        break;
      case (this.CurrentHour >= 12 && this.CurrentHour <= 17):
        return("Midday now");
        break;
        case (this.CurrentHour >= 17 && this.CurrentHour <= 22):
        console.log("Evening now");
        break;
      default:
        console.log("Night now");
    }
  }

  ngIfElse = false;
  ngIfTest() {
    return this.ngIfElse = true;
  }

  arrayOfCards:any = [
    {id:'King', power: 88, magic: 33, img: "https://i.pinimg.com/originals/f9/6c/6e/f96c6ef6bfdad0fc074a4503fca9c40e.png",}, 
    {id:'Queen', power: 79, magic: 48, img: "https://i.pinimg.com/originals/e4/45/9f/e4459f271b4408291f5a346134d8c8c7.png"}, 
    {id:'George', power: 55, magic: 12, img: "http://richardschneider.github.io/cardsJS/cards/10S.svg"}
  ];

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
