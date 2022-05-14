import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductDetails } from 'src/app/model/product';
import { RequestBodyProductDetail } from 'src/app/model/requestBodyProduct';
import { ResponseBody } from 'src/app/model/responseBody';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css'],
})
export class ProductDetailPageComponent implements OnInit {
  product!: Product;
  productDetails: ProductDetails[] = [];

  constructor(private productService: ProductService) {}

  getProductDetails(requestBody: RequestBodyProductDetail): void {
    this.productService
      .getProductDetails(requestBody)
      .subscribe((response: ResponseBody) => {
        console.log(response);
        this.productDetails = response.data;
      });
  }

  ngOnInit(): void {
    this.product = this.productService.getProduct();
    this.getProductDetails(new RequestBodyProductDetail(this.product.prodCode.toString()));
  }
}
