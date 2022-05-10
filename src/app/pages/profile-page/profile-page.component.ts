import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer, CustomerProfile } from 'src/app/model/customer';
import { RequestBodyIdCustomer} from 'src/app/model/requestBodyCustomer';
import { ResponseBody } from 'src/app/model/responseBody';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  
  customerProfile!: CustomerProfile;
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    license: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    website: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {
    
  }

  public getProFileCustomer(requestBody: RequestBodyIdCustomer): void {
    this.customerService
      .getProFileCustomer(requestBody)
      .subscribe((response: ResponseBody) => {
        this.customerProfile = response.data[0];
        this.form.controls['name'].setValue(this.customerProfile.custName);
        this.form.controls['address'].setValue(this.customerProfile.custAddr);
        this.form.controls['city'].setValue(this.customerProfile.city);
        this.form.controls['country'].setValue(this.customerProfile.county);
        this.form.controls['state'].setValue(this.customerProfile.state);
        this.form.controls['zip'].setValue(this.customerProfile.custZip);
        this.form.controls['type'].setValue(this.customerProfile.custType);
        this.form.controls['license'].setValue(this.customerProfile.custLicense);
        this.form.controls['contact'].setValue(this.customerProfile.contact);
        this.form.controls['phone'].setValue(this.customerProfile.custPhone);
        this.form.controls['website'].setValue(this.customerProfile.custWebSite);
        this.form.controls['email'].setValue(this.customerProfile.custEmail);
      });
  }

  ngOnInit(): void {  
    let idCustomer = this.route.snapshot.paramMap.get('idCustomer') || '';
    let requestBody = new RequestBodyIdCustomer(Number(idCustomer));
    this.getProFileCustomer(requestBody);
  }
}
