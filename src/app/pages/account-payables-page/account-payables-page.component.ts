import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountHistory } from 'src/app/model/customer';
import { RequestBodyIdCustomer } from 'src/app/model/requestBodyCustomer';
import { ResponseBody } from 'src/app/model/responseBody';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-account-payables-page',
  templateUrl: './account-payables-page.component.html',
  styleUrls: ['./account-payables-page.component.css']
})
export class AccountPayablesPageComponent implements OnInit {

  accountHistories: AccountHistory[] = [];

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  public getAccountHistory(requestBody: RequestBodyIdCustomer): void {
    this.customerService
      .getAccountHistory(requestBody)
      .subscribe((response: ResponseBody) => {
        this.accountHistories = response.data;
      });
  }

  ngOnInit(): void {  
    let idCustomer = this.route.snapshot.paramMap.get('idCustomer') || '';
    let requestBody = new RequestBodyIdCustomer(Number(idCustomer));
    this.getAccountHistory(requestBody);
  }
}
