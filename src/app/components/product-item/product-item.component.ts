import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product!: Product;
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  goToDetailPage(product:Product){
    this.productService.setProduct(product);
    //rederict
    this.router.navigate(['/product-detail']);
  }

}
