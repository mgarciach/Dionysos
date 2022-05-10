import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  idCustomer!: number;
  subscription: Subscription;

  constructor(private loginService: LoginService, private router: Router) {
    this.subscription = this.loginService.newIdCustomer$.subscribe((idCustomer) => {
      if(typeof idCustomer === 'number') {
        this.idCustomer = idCustomer;
        console.log(this.idCustomer + ' desde nav-page');
      } else {
        this.idCustomer = 0;
      }
    });
  }

  logout() {
    this.loginService.removeIdCustomer();
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
