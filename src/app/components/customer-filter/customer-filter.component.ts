import { Component, OnInit } from '@angular/core';
import { City, CustType, State } from 'src/app/model/customer';
import { RequestBodyCustomer } from 'src/app/model/requestBodyCustomer';
import { ResponseBody } from 'src/app/model/responseBody';
import { FilterService } from 'src/app/service/filter.service';

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.css']
})
export class CustomerFilterComponent implements OnInit {


  
  filterText!: string;
  selectedCityId: number = 0;
  selectedStateId: number = 0;
  selectedcustTypeId: number = 0;
  cities: City[] = [];
  states: State[] = [];
  custTypes: CustType[] = [];

  constructor(private filterService: FilterService) { }

  getCities(): void {
    this.filterService.getCities().subscribe((response: ResponseBody) => {
      this.cities = response.data;
    });
  }
  getStates(): void {
    this.filterService.getStates().subscribe((response: ResponseBody) => {
      this.states = response.data;
    });
  }

  getCustTypes(): void {
    this.filterService.getCustTypes().subscribe((response: ResponseBody) => {
      this.custTypes = response.data;
    });
  }

  filterBySelects() {
    let data: RequestBodyCustomer = new RequestBodyCustomer(
      this.selectedStateId,
      this.selectedCityId,
      this.selectedcustTypeId
    );
    this.filterService.broadcast(data); 
  }

  filterByText() {
    this.filterService.broadcast(this.filterText);
  }

  ngOnInit(): void {
    this.getCities();
    this.getStates();
    this.getCustTypes();
  }

}
