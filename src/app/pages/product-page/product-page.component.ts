import { Component, OnInit } from '@angular/core';
import { RequestBodyProduct } from 'src/app/model/requestBodyProduct';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  submenusProduct = [ 'Wine', 'Liquor', 'Beer', 'Foods' ];
  parentFilterSelects!:RequestBodyProduct;
  parentFilterText!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
