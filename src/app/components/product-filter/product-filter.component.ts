import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Brand,
  Country,
  Producer,
  pType,
  Region,
  Variety,
} from 'src/app/model/product';
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
  vegan: boolean = false;
  bioDinamic: boolean = false;
  organic: boolean = false;
  sostenible: boolean = false;
  noSulfitos: boolean = false;
  noGenetico: boolean = false;

  brands: Brand[] = [];
  countries: Country[] = [];
  producers: Producer[] = [];
  types: pType[] = [];
  varieties: Variety[] = [];
  regions: Region[] = [];
  @Input() prodClass!: number;

  constructor(
    private filterService: FilterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
    this.changeRoute(data);
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
    setTimeout(() => {
      this.getFilters();
    });
    this.getBrands();
    this.getCountries();
    this.getProducers();
    this.getTypes();
    this.getVarieties();
  }

  private changeRoute = (data: RequestBodyProduct) => {
    this.router.navigate(
      [
        {
          filter: JSON.stringify(data),
        },
      ],
      {
        relativeTo: this.route,
        replaceUrl: true,
      }
    );
  };

  private getFilters = () => {
    const filters = this.route.snapshot.paramMap.get('filter');
    if (filters) {
      const data = JSON.parse(filters) as RequestBodyProduct;

      this.setFiltersFromRoute(data);

      this.filterService.broadcast(data);
    }
  };

  private setFiltersFromRoute = (data: RequestBodyProduct) => {
    console.log(data);
    this.selectedCountryId = data.country as any || this.selectedCountryId;
    this.selectedTypeId = data.prodType as any|| this.selectedTypeId;
    this.selectedVarietyId = data.prodVariety as any|| this.selectedVarietyId;
    this.selectedProducerId = data.producer as any|| this.selectedProducerId;
    this.selectedBrandId = data.prodBrand as any|| this.selectedBrandId;
    this.selectedRegion = data.region;
    this.rating = data.rating;
    this.vegan = data.vegan;
    this.bioDinamic = data.bioDinamic;
    this.organic = data.organic;
    this.sostenible = data.sostenible;
    this.noSulfitos = data.noSulfitos;
    this.noGenetico = data.noGenetico;
  };
}
