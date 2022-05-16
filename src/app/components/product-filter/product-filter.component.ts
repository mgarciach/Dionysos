import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Brand, Country, Producer, pType, Region, Variety } from 'src/app/model/product';
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
  selectedTypeId: string = '0';
  selectedVarietyId: string = '0';
  rating: boolean = false;
  vegan : boolean = false;
  bioDinamic: boolean = false;
  organic : boolean = false;
  sostenible : boolean = false;
  noSulfitos : boolean = false;
  noGenetico : boolean = false;

  brands: Brand[] = [];
  countries: Country[] = [];
  producers: Producer[] = [];
  types: pType[] = [];
  varieties: Variety[] = [];
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

  getTypes(): void {
    this.filterService.getTypes().subscribe((response: ResponseBody) => {
      this.types = response.data;
    });
  }

  getVarieties(): void {
    this.filterService.getVarieties().subscribe((response: ResponseBody) => {
      this.varieties = response.data;
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
      Number(this.selectedTypeId),
      Number(this.selectedVarietyId),
      Number(this.selectedProducerId),
      Number(this.selectedBrandId),
      this.selectedRegion,
      this.rating,
      this.vegan,
      this.bioDinamic,
      this.organic,
      this.sostenible,
      this.noSulfitos,
      this.noGenetico
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

  cleanFilter() {
    this.filterText = '';
    this.selectedBrandId = '0';
    this.selectedCountryId = '0';
    this.selectedRegion = 'string';
    this.selectedProducerId = '0';
    this.selectedTypeId = '0';
    this.selectedVarietyId = '0';
    this.rating = false;
    this.vegan = false;
    this.bioDinamic = false;
    this.organic = false;
    this.sostenible = false;
    this.noSulfitos = false;
    this.noGenetico = false;
  }

  ngOnInit(): void {
    this.getBrands();
    this.getCountries();
    this.getProducers();
    this.getTypes();
    this.getVarieties();
  }
}
