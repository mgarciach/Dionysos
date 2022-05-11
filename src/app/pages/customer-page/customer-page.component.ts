import { Component, OnInit } from '@angular/core';
import { SubPage } from 'src/app/model/subPage';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css'],
})
export class CustomerPageComponent implements OnInit {
  
  subPagesCustomer: SubPage[] = [{
    name: 'Profile',
    url: '/customer/profile',
  }, {
    name: 'History',
    url: '/customer/history',
  },{
    name: 'Account Payables',
    url: '/customer/account-payables',
  }];

  constructor() {

  }

  ngOnInit(): void {

  }
}
