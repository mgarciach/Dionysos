import { Component, OnInit } from '@angular/core';
import { Brand, Country, Producer, Region } from 'src/app/model/product';
import { RequestBodyProduct } from 'src/app/model/requestBodyProduct';
import { ResponseBody } from 'src/app/model/responseBody';
import { FilterService } from 'src/app/service/filter.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent implements OnInit {

  filterText!: string;
  selectedBrandId: number = 0;
  selectedCountryId: number = 0;
  selectedRegion: string = 'string';
  selectedProducerId: number = 0;
  brands: Brand[] = [];
  countries: Country[] = [];
  producers: Producer[] = [];
  regions: Region[] = [];

  constructor(private filterService: FilterService) {}

  getBrands(): void {
    this.filterService.getBrands().subscribe((response: ResponseBody) => {
      this.brands = response.data;
    });
  }
  getCountries(): void {
    this.filterService.getCountries().subscribe((response: ResponseBody) => {
      this.countries = response.data;
    });
  }

  getProducers(): void {
    this.filterService.getProducers().subscribe((response: ResponseBody) => {
      this.producers = response.data;
    });
  }

  onCountrySelect() {
    this.selectedRegion = 'string';
    this.filterService
      .getRegion(this.selectedCountryId)
      .subscribe((response: ResponseBody) => {
        this.regions = response.data;
      });
  }

  filterBySelects(isCountry: boolean) {
    if (isCountry) {
      this.selectedRegion = 'string';
    } 
    let data: RequestBodyProduct = new RequestBodyProduct(
      0,
      this.selectedCountryId,
      0,
      0,
      this.selectedProducerId,
      this.selectedBrandId,
      this.selectedRegion
    );
    this.filterService.broadcast(data); 
  }

  filterByText() {
    this.filterService.broadcast(this.filterText);
  }

  ngOnInit(): void {
    this.getBrands();
    this.getCountries();
    this.getProducers();
  }
}
