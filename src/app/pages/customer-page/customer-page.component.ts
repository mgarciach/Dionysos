import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  submenusCustomer = [ 'Profile', 'History', 'Account Payables' ];
  constructor() { }

  ngOnInit(): void {
  }

}
