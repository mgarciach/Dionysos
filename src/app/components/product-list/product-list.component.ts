import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { RequestBodyProduct } from 'src/app/model/requestBodyProduct';
import { ResponseBody } from 'src/app/model/responseBody';
import { FilterService } from 'src/app/service/filter.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  @Input() prodClass!: number;

  constructor(
    private productService: ProductService,
    private filterService: FilterService,
    private route: ActivatedRoute
  ) {}

  getProducts(requestBody: RequestBodyProduct): void {
    this.productService
      .getProducts(requestBody)
      .subscribe((response: ResponseBody) => {
        this.products = response.data;
      });
  }

  ngOnInit(): void {
    //cambio de filtro
    this.filterService.newFilterData$.subscribe((data) => {
      console.log(data);
      if (data instanceof RequestBodyProduct || data instanceof Object) {
        this.getProducts(data);
      }
      if (typeof data === 'string') {
        this.products.forEach((product: Product) => {
          if (product.filtro.toLowerCase().includes(data)) {
            product.visibility = 'show';
          } else {
            product.visibility = 'hide';
          }
        });
      }
    });
  }

  ngOnChanges() {
    let requestBody = new RequestBodyProduct(
      this.prodClass,
      0,
      0,
      0,
      0,
      0,
      'string'
    );

    if (!this.getFilters()) {
      this.getProducts(requestBody);
    }
  }

  private getFilters = () => {
    return this.route.snapshot.paramMap.get('filter');
  };
}
