import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { City, CustomerProfile, CustType, State } from 'src/app/model/customer';
import { RequestBodyIdCustomer } from 'src/app/model/requestBodyCustomer';
import { ResponseBody } from 'src/app/model/responseBody';
import { CustomerService } from 'src/app/service/customer.service';
import { FilterService } from 'src/app/service/filter.service';
import { LoginService } from 'src/app/service/login.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  customerProfile!: CustomerProfile;
  cities: City[] = [];
  states: State[] = [];
  custTypes: CustType[] = [];
  loading: boolean = false;
  form: FormGroup = new FormGroup({
    idCustomer: new FormControl(''),
    userCambio: new FormControl(''),
    custNameWeb: new FormControl('', [Validators.required]),
    custAddrWeb: new FormControl('', [Validators.required]),
    countyWeb: new FormControl('', [Validators.required]),
    custZipWeb: new FormControl('', [Validators.required]),
    custLicenseWeb: new FormControl(''),
    custContWeb: new FormControl('', [Validators.required]),
    custPhoneWeb: new FormControl('', [Validators.required]),
    custWebSiteWeb: new FormControl(''),
    custEmailWeb: new FormControl(''),
    cityWeb: new FormControl(0, [Validators.required]),
    type: new FormControl(0, [Validators.required]),
    stateWeb: new FormControl(0, [Validators.required]),
    custContactWeb: new FormControl('', [Validators.required]),
  });

  constructor(
    private loginService: LoginService,
    private customerService: CustomerService,
    private filterService: FilterService,
    private _snackBar: MatSnackBar
  ) {}

  getProFileCustomer(requestBody: RequestBodyIdCustomer): void {
    this.customerService
      .getProFileCustomer(requestBody)
      .subscribe((response: ResponseBody) => {
        console.log(response.data[0]);
        this.customerProfile = response.data[0];
        this.form.controls['idCustomer'].setValue(
          this.customerProfile.idCustomer
        );
        this.form.controls['custNameWeb'].setValue(
          this.customerProfile.custName
        );
        this.form.controls['custAddrWeb'].setValue(
          this.customerProfile.custAddr
        );
        this.form.controls['countyWeb'].setValue(this.customerProfile.county);
        this.form.controls['custZipWeb'].setValue(this.customerProfile.custZip);
        this.form.controls['custLicenseWeb'].setValue(
          this.customerProfile.custLicense
        );
        this.form.controls['custContWeb'].setValue(
          this.customerProfile.contact
        );
        this.form.controls['custPhoneWeb'].setValue(
          this.customerProfile.custPhone
        );
        this.form.controls['custWebSiteWeb'].setValue(
          this.customerProfile.custWebSite
        );
        this.form.controls['custEmailWeb'].setValue(
          this.customerProfile.custEmail
        );
        this.form.controls['custContactWeb'].setValue(
          this.customerProfile.contact
        );
        this.form.controls['cityWeb'].setValue(this.customerProfile.idCity);
        this.form.controls['type'].setValue(this.customerProfile.idType);
        this.form.controls['stateWeb'].setValue(this.customerProfile.idState);
        this.disableFormFields();
      });
  }

  getStates(): void {
    this.filterService.getStates().subscribe((response: ResponseBody) => {
      this.states = response.data;
    });
  }

  getCities(state: string): void {
    this.filterService.getCities(state).subscribe((response: ResponseBody) => {
      this.cities = response.data;
      console.log(response.data);
    });
  }

  getCustTypes(): void {
    this.filterService.getCustTypes().subscribe((response: ResponseBody) => {
      this.custTypes = response.data;
    });
  }

  setCities(state: string): void {
    this.getCities(state);
    console.log(this.form.controls['stateWeb'].value);
  }

  updateProFileCustomer(requestBody: any): void {
    this.customerService
      .updateProFileCustomer(requestBody)
      .subscribe((response: ResponseBody) => {
        alert('Customer updated successfully');
      });
  }

  update() {
    console.log(this.form.value);
    //this.updateProFileCustomer(this.form.value);
    this.sendEmail();
  }

  ngOnInit(): void {
    let idCustomer = this.loginService.getIdCustomer();
    let requestBody = new RequestBodyIdCustomer(Number(idCustomer));
    this.getProFileCustomer(requestBody);
    this.getStates();
    this.getCustTypes();
  }

  private disableFormFields = () => {
    this.form.get('custNameWeb')?.disable();
    this.form.get('custAddrWeb')?.disable();
    this.form.get('stateWeb')?.disable();
    this.form.get('cityWeb')?.disable();
    this.form.get('countyWeb')?.disable();
    this.form.get('custZipWeb')?.disable();
    this.form.get('type')?.disable();
    this.form.get('custLicenseWeb')?.disable();
  };

  private sendEmail = () => {
    const value = this.form.getRawValue();
    this.loading = true;
    this.customerService
      .sendMail({
        customerName: this.customerProfile.custName,
        customerCode: this.customerProfile.idCustomer.toString(),
        customerNewWebSite: value.custWebSiteWeb,
        customerNewEmail: value.custEmailWeb,
        customerNewPhone: value.custPhoneWeb,
        customerNewContact: value.custContactWeb,
        customerOldWebSite: this.customerProfile.custWebSite,
        customerOldEmail: this.customerProfile.custEmail,
        customerOldPhone: this.customerProfile.custPhone,
        customerOldContact: this.customerProfile.contact,
        emplEmail: this.customerProfile.empemail,
      })
      .subscribe(() => {
        this.loading = false;
        this._snackBar.open('updated data.', 'close');
      });
  };
}
