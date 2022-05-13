import { Component, OnInit, SimpleChanges } from '@angular/core';
import { City, CustType, State } from 'src/app/model/customer';
import { RequestBodyCustomer } from 'src/app/model/requestBodyCustomer';
import { ResponseBody } from 'src/app/model/responseBody';
import { FilterService } from 'src/app/service/filter.service';

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.css'],
})
export class CustomerFilterComponent implements OnInit {
  filterText!: string;
  selectedCityId: number = 0;
  selectedStateId: number = 0;
  selectedcustTypeId: number = 0;
  cities: City[] = [];
  states: State[] = [];
  custTypes: CustType[] = [];

  constructor(private filterService: FilterService) {}

  getStates(): void {
    this.filterService.getStates().subscribe((response: ResponseBody) => {
      this.states = response.data;
    });
  }

  getCities(state: string): void {
    this.filterService.getCities(state).subscribe((response: ResponseBody) => {
      this.cities = response.data;
    });
  }

  getCustTypes(): void {
    this.filterService.getCustTypes().subscribe((response: ResponseBody) => {
      this.custTypes = response.data;
    });
  }
  filterByText() {
    this.filterService.broadcast(this.filterText);
  }

  filterBySelects() {
    let data: RequestBodyCustomer = new RequestBodyCustomer(
      this.selectedStateId,
      this.selectedCityId,
      this.selectedcustTypeId
    );
    console.log(data);
    this.filterService.broadcast(data);
  }

  setStateValue(stateId: number, stateName?: string) {
    if(stateId == 0 ) {
      this.cities = [];
    }
    if(stateName) {
      this.getCities(stateName);
    }
    this.selectedStateId = stateId;
    this.filterBySelects();
  }

  setCityValue(cityId: number) {
    this.selectedCityId = cityId;
    this.filterBySelects();
  }

  setTypeValue(custTypeId: number) {
    this.selectedcustTypeId = custTypeId;
    this.filterBySelects();
  }

  ngOnInit(): void {
    this.getStates();
    this.getCustTypes();
  }

}
