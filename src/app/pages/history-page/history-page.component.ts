import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerHistory } from 'src/app/model/customer';
import { RequestBodyIdCustomer } from 'src/app/model/requestBodyCustomer';
import { ResponseBody } from 'src/app/model/responseBody';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  customerHistories: CustomerHistory[] = [];

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  public getHistoryCustomer(requestBody: RequestBodyIdCustomer): void {
    this.customerService
      .getHistoryCustomer(requestBody)
      .subscribe((response: ResponseBody) => {
        this.customerHistories = response.data;
      });
  }

  ngOnInit(): void {  
    let idCustomer = this.route.snapshot.paramMap.get('idCustomer') || '';
    let requestBody = new RequestBodyIdCustomer(Number(idCustomer));
    this.getHistoryCustomer(requestBody);
  }

}
