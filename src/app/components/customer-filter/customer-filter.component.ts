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
  selectedCityId: string = '0';
  selectedStateId: string = '0';
  selectedcustTypeId: string = '0';
  cities: City[] = [];
  states: State[] = [];
  custTypes: CustType[] = [];

  constructor(private filterService: FilterService) {}

  getStates(): void {
    this.filterService.getStates().subscribe((response: ResponseBody) => {
      this.states = response.data;
    });
  }

  getCities(idState: string): void {
    this.filterService.getCities(idState).subscribe((response: ResponseBody) => {
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
      Number(this.selectedStateId),
      Number(this.selectedCityId),
      Number(this.selectedcustTypeId)
    );
    this.filterService.broadcast(data);
  }

  onStateSelect() {
    this.getCities(this.selectedStateId);
  }

  ngOnInit(): void {
    this.getStates();
    this.getCustTypes();
  }

}
