import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  idCustomer: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  logout() {
    this.idCustomer = '';
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.loginService.idCustomerChanged
    .subscribe( (idCustomer) => {this.idCustomer = idCustomer; console.log(this.idCustomer);} );
  }

}
