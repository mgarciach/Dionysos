import { Component, Input, OnInit } from '@angular/core';
import { CustomerHistory } from 'src/app/model/customer';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {

  @Input()
  history!: CustomerHistory;
  constructor() { }

  ngOnInit(): void {
  }

}
