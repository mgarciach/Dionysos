import { Component, OnInit } from '@angular/core';
import { AccountHistory } from 'src/app/model/customer';
import { RequestBodyAccountHistoryByDates } from 'src/app/model/requestBodyCustomer';
import { ResponseBody } from 'src/app/model/responseBody';
import { CustomerService } from 'src/app/service/customer.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-account-payables-page',
  templateUrl: './account-payables-page.component.html',
  styleUrls: ['./account-payables-page.component.css']
})
export class AccountPayablesPageComponent implements OnInit {

  nowDate = new Date();
  initDate = new Date(this.nowDate.getFullYear(),0,1);
  formatNowDate = this.nowDate.toISOString().split('T')[0];
  formatInitDate = this.initDate.toISOString().split('T')[0];

  displayedColumns: string[] = ['Invoice Number', 'Date of Invoice', 'Amount of Invoice', 'Payments', 'Balance', 'Days Overdue'];

  accountHistories: AccountHistory[] = [];

  constructor(private loginService:LoginService, private customerService: CustomerService) { }

  public getAccountHistory(requestBody: RequestBodyAccountHistoryByDates): void {
    this.customerService
      .getAccountHistory(requestBody)
      .subscribe((response: ResponseBody) => {
        this.accountHistories = response.data;
      });
  }

  ngOnInit(): void {
    let idCustomer = this.loginService.getIdCustomer();
    let requestBody = new RequestBodyAccountHistoryByDates(1,this.formatInitDate, this.formatNowDate, idCustomer, 1);
    this.getAccountHistory(requestBody);
  }
}
