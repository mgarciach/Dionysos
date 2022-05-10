import { Component, Input, OnInit } from '@angular/core';
import { AccountHistory } from 'src/app/model/customer';

@Component({
  selector: 'app-account-payables-item',
  templateUrl: './account-payables-item.component.html',
  styleUrls: ['./account-payables-item.component.css']
})
export class AccountPayablesItemComponent implements OnInit {

  @Input()
  history!: AccountHistory;
  constructor() { }

  ngOnInit(): void {
  }

}
