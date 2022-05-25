import { Component, OnInit } from '@angular/core';
import { SubPage } from 'src/app/model/subPage';
import { LoginService } from 'src/app/service/login.service';

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
  }, {
    name: 'Accounts Payable',
    url: '/customer/account-payables',
  }];

  constructor(public loginService: LoginService) {

  }

  ngOnInit(): void {

  }
}
