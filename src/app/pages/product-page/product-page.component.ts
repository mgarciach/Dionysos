import { Component, OnInit } from '@angular/core';
import { RequestBodyProduct } from 'src/app/model/requestBodyProduct';
import { SubMenu } from 'src/app/model/subMenu';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  submenusProduct: SubMenu []= [{
    name: 'Wine',
    url: '',
  }, {
    name: 'Liquor',
    url: '',
  },{
    name: 'Beer',
    url: '',
  },{
    name: 'Foods',
    url: '',
  }];
  
  parentFilterSelects!:RequestBodyProduct;
  parentFilterText!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
