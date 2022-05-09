import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SubMenu } from 'src/app/model/subMenu';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css'],
})
export class CustomerPageComponent implements OnInit {
  idCustomer: string = '';
  submenusCustomer: SubMenu[] = [{
    name: 'Profile',
    url: '/customer/profile',
  }, {
    name: 'History',
    url: '/customer/history',
  },{
    name: 'Account Payables',
    url: '/customer/account-payables',
  }];
  subscription: Subscription;

  constructor(private loginService: LoginService) {
    this.subscription = this.loginService.newIdCustomer$.subscribe((idCustomer) => {
      this.idCustomer = idCustomer;
      console.log(this.idCustomer + ' from customer-page');
    });
  }
  ngDoCheck() {
    
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
