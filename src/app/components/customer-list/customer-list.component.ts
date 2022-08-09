import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { RequestBodyCustomer } from 'src/app/model/requestBodyCustomer';
import { ResponseBody } from 'src/app/model/responseBody';
import { CustomerService } from 'src/app/service/customer.service';
import { FilterService } from 'src/app/service/filter.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private filterService: FilterService,
    private route: ActivatedRoute
  ) { }

  getCustomers(requestBody: RequestBodyCustomer): void {
    this.customerService
      .getCustomers(requestBody)
      .subscribe((response: ResponseBody) => {
        this.customers = response.data;
      });
  }

  ngOnInit(): void {

    const prodCode = this.route.snapshot.queryParamMap.get('prodCode') || null!;

    let requestBody: RequestBodyCustomer = new RequestBodyCustomer(0, 0, 0, prodCode);
    this.getCustomers(requestBody);

    //cambio de filtro
    this.filterService.newFilterData$.subscribe((data) => {
      if (data instanceof RequestBodyCustomer) {
        this.getCustomers(data);
      }
      if (typeof data === 'string') {
        this.customers.forEach((customer: Customer) => {
          if (customer.custname.toLowerCase().includes(data)) {
            customer.visibility = "show";
          } else {
            customer.visibility = "hide";
          }
        });
      }
    });
  }
}
