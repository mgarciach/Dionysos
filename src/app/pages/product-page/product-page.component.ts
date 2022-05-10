import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestBodyProduct } from 'src/app/model/requestBodyProduct';
import { SubMenu } from 'src/app/model/subMenu';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  prodClass: number = 0; 

  submenusProduct: SubMenu []= [{
    name: 'Wine',
    id: 4,
  }, {
    name: 'Liquor',
    id: 1,
  },{
    name: 'Beer',
    id: 2,
  },{
    name: 'Foods',
    id: 3,
  }];

  parentFilterSelects!:RequestBodyProduct;
  parentFilterText!:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => { 
      this.prodClass = param['prodClass'];
    })
  }

}
