import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubMenu } from 'src/app/model/subMenu';
import { LoginService } from 'src/app/service/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {

  imgUrl = environment.imgUrl + `/weblink4.jpg`;
  idCustomer!: number ;
  subscription: Subscription;

  @Input() submenus!: SubMenu[];
  @Input() isCustomerPage!: boolean;

  constructor(private loginService: LoginService) {
    this.subscription = this.loginService.newIdCustomer$.subscribe((idCustomer) => {
      if(typeof idCustomer === 'number') {
        this.idCustomer = idCustomer;
        console.log(this.idCustomer + ' desde seccion-page');
      }    
    });
  }

  ngOnInit(): void {

  }
  
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
