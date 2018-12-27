import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-tcard',
  templateUrl: './add-tcard.component.html',
  styleUrls: ['./add-tcard.component.css']
})
export class AddTcardComponent implements OnInit {

  trelloName: string = '';
  trelloQuan: number;
  @Output('onAddTcard') tCardEmitter = new EventEmitter<{name: string, quan: number}>();

  addNewTcard() {
    this.tCardEmitter.emit({
      name: this.trelloName,
      quan: this.trelloQuan
    });

    this.trelloName = '';
    this.trelloQuan = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
