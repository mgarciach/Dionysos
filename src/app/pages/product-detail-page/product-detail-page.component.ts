import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { Product, ProductDetails } from 'src/app/model/product';
import { RequestBodyProductDetail } from 'src/app/model/requestBodyProduct';
import { ResponseBody } from 'src/app/model/responseBody';
import { CustomerService } from 'src/app/service/customer.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css'],
})
export class ProductDetailPageComponent implements OnInit {
  product!: Product;
  productDetails: ProductDetails[] = [];
  customers: Customer[] = [];

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private router: Router
  ) { }

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
    this.getProductDetails(
      new RequestBodyProductDetail(this.product.prodCode.toString())
    );
    //this.getCustomers();
  }

  // getCustomers = () => {
  //   this.customerService
  //     .getCustomers({
  //       city: 0,
  //       state: 0,
  //       type: 0,
  //       prodcode: this.product.prodCode.toString(),
  //     })
  //     .subscribe((resp) => {
  //       this.customers = resp.data;
  //     });
  // };

  goToCustomers = () => {
    this.router.navigate(['/customer/home'], { queryParams: { prodCode: this.product.prodCode.toString() } });
  }
}
