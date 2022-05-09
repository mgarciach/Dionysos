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
  idCustomer: string = '';
  subscription: Subscription;

  constructor(private loginService: LoginService, private router: Router) {
    this.subscription = this.loginService.newIdCustomer$.subscribe((idCustomer) => {
      this.idCustomer = idCustomer;
      console.log(this.idCustomer + ' from nav-bar');
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
