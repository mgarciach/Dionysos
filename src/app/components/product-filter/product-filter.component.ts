import { Component, Input, OnInit } from '@angular/core';
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
  selectedBrandId: string = '0';
  selectedCountryId: string = '0';
  selectedRegion: string = 'string';
  selectedProducerId: string = '0';
  brands: Brand[] = [];
  countries: Country[] = [];
  producers: Producer[] = [];
  regions: Region[] = [];
  @Input() prodClass!: number;

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

  getRegions(countryId: number): void {
    this.filterService
      .getRegion(countryId)
      .subscribe((response: ResponseBody) => {
        this.regions = response.data;
      });
  }

  filterByText() {
    this.filterService.broadcast(this.filterText);
  }

  filterBySelects(isCountry: boolean) {
    if (isCountry) {
      this.selectedRegion = 'string';
    }
    let data: RequestBodyProduct = new RequestBodyProduct(
      this.prodClass,
      Number(this.selectedCountryId),
      0,
      0,
      Number(this.selectedProducerId),
      Number(this.selectedBrandId),
      this.selectedRegion
    );
    this.filterService.broadcast(data);
  }

  onCountrySelect() {
    this.selectedRegion = 'string';
    this.filterService
      .getRegion(Number(this.selectedCountryId))
      .subscribe((response: ResponseBody) => {
        this.regions = response.data;
      });
  }

  ngOnInit(): void {
    console.log(this.selectedBrandId);
    console.log(this.selectedCountryId);
    console.log(this.selectedRegion);
    console.log(this.selectedProducerId)
    this.getBrands();
    this.getCountries();
    this.getProducers();
  }
}
