import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/model/brand';
import { Country } from 'src/app/model/country';
import { Producer } from 'src/app/model/producer';
import { Region } from 'src/app/model/region';
import { RequestBodyProduct } from 'src/app/model/requestBodyProduct';
import { ResponseBody } from 'src/app/model/responseBody';
import { FilterService } from 'src/app/service/filter.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent implements OnInit {

  public filterText!: string;
  public selectedBrandId: number = 0;
  public selectedCountryId: number = 0;
  public selectedRegion: string = 'string';
  public selectedProducerId: number = 0;
  public brands: Brand[] = [];
  public countries: Country[] = [];
  public producers: Producer[] = [];
  public regions: Region[] = [];

  constructor(private filterService: FilterService) {}

  public getBrands(): void {
    this.filterService.getBrands().subscribe((response: ResponseBody) => {
      this.brands = response.data;
    });
  }
  public getCountries(): void {
    this.filterService.getCountries().subscribe((response: ResponseBody) => {
      this.countries = response.data;
    });
  }

  public getProducers(): void {
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
    console.log(data);
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
