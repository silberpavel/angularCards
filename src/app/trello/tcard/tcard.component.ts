import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tcard',
  templateUrl: './tcard.component.html',
  styleUrls: ['./tcard.component.css']
})
export class TcardComponent implements OnInit {

  @Input() tcardItem: {name: string, quan: number};

  constructor() { }

  ngOnInit() {
  }

}
