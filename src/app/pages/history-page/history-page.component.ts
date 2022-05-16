import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerHistory } from 'src/app/model/customer';
import { RequestBodyGetHistoryByDates } from 'src/app/model/requestBodyCustomer';
import { ResponseBody } from 'src/app/model/responseBody';
import { CustomerService } from 'src/app/service/customer.service';
import { FilterService } from 'src/app/service/filter.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  nowDate = new Date();
  initDate = new Date(this.nowDate.getFullYear(),0,1);
  formatNowDate = this.nowDate.toISOString().split('T')[0];
  formatInitDate = this.initDate.toISOString().split('T')[0];

  customerHistories: CustomerHistory[] = [];

  constructor(private loginService: LoginService, private customerService: CustomerService, private filterService: FilterService) { }

  public getHistoryCustomer(requestBody: RequestBodyGetHistoryByDates): void {
    this.customerService
      .getHistoryCustomer(requestBody)
      .subscribe((response: ResponseBody) => {
        this.customerHistories = response.data;
      });
  }

  ngOnInit(): void {
    let custNum = this.loginService.getCustNum();
    let requestBody = new RequestBodyGetHistoryByDates(custNum, this.formatInitDate, this.formatNowDate,2);
    this.getHistoryCustomer(requestBody);
    //filtro
    this.filterService.newFilterData$.subscribe((data) => {
        let formatStartDate = data.start.toISOString().split('T')[0];
        let formatEndDate = data.end.toISOString().split('T')[0];
        let requestBody = new RequestBodyGetHistoryByDates(custNum, formatStartDate, formatEndDate,2);
        this.getHistoryCustomer(requestBody);
    });
  }

}
