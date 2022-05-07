import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseBody } from '../model/responseBody';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServerUrl = environment.apiUrl;

  idCustomerChanged = new Subject<string>();
  idCustomer: string = '';


  constructor(private http: HttpClient) { }

  login(requestBody: any): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Customer/GetCustomerLogin`, requestBody);
  }

  addIdCustomer(idCustomer: string) {
    this.idCustomer = idCustomer;
    this.idCustomerChanged.next(this.idCustomer);
  }
  removeIdCustomer() {
    this.idCustomer = '';
    this.idCustomerChanged.next(this.idCustomer);
  }

  getIdCustomer() {
    return this.idCustomer;
  }
}
