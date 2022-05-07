import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {}

  error!: string;
  form: FormGroup = new FormGroup({
    idLocal: new FormControl(2),
    userId: new FormControl(''),
    userPass: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.loginService.login(this.form.value).subscribe((response) => {
        if (response.data) {
          this.loginService.addIdCustomer(response.data[0].idCustomer);
          this.router.navigate(['/products']);         
        } else {
          this.error = 'Invalid Credentials';
        }      
      });
    }
  }

  ngOnInit(): void {}
}
