import { Component, Input, OnInit } from '@angular/core';
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
  productsTemp: Product[] = [];
  @Input() prodClass!: number;

  constructor(
    private productService: ProductService,
    private filterService: FilterService
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
    this.filterService.dataReceived$.subscribe((data) => {
      if (data instanceof RequestBodyProduct) {
        this.getProducts(data);
      }
      if (typeof data === 'string') {
        if (data == '') {
          this.products = this.productsTemp;
        } else {
          this.productsTemp = this.products;
          this.products = this.products.filter((product: Product) => {
            return product.filtro.toLowerCase().includes(data);
          });
        }
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
    this.getProducts(requestBody);
  }
}
