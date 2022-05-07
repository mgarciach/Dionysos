import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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

  public products: Product[] = [];

  constructor(private productService: ProductService,private filterService: FilterService) {   }

  public getProducts(requestBody: RequestBodyProduct): void {
    this.productService
      .getProducts(requestBody)
      .subscribe((response: ResponseBody) => {
        this.products = response.data;
      });
  }

  ngOnInit(): void {

    let requestBody: RequestBodyProduct = new RequestBodyProduct(0, 0, 0, 0, 0, 0, 'string');
    this.getProducts(requestBody);
    
    //cambio de filtro
    this.filterService.dataReceived$.subscribe((data) => {
      if (data instanceof RequestBodyProduct) {
        this.getProducts(data);
      }
      if (typeof data === 'string') {
        this.products = this.products.filter((product: Product) => {
          return product.filtro
            .toLowerCase()
            .includes(data);
        });
      }
    });
  }

}
