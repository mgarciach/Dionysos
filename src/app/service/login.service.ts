import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseBody } from '../model/responseBody';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServerUrl = environment.apiUrl;
  idCustomer!: string ;
  custNum!: string ;

  private idCustomer$ = new BehaviorSubject<any>({});
  newIdCustomer$ = this.idCustomer$.asObservable();

  constructor(private http: HttpClient) { }

  login(requestBody: any): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Customer/GetCustomerLogin`, requestBody);
  }

  setCustomer(idCustomer: string, custNum: string) {
    this.idCustomer = idCustomer;
    this.custNum = custNum;
    this.idCustomer$.next(this.idCustomer);
  }
  removeCustomer() {
    this.idCustomer = '';
    this.custNum = '';
    this.idCustomer$.next(this.idCustomer);
  }

  getIdCustomer() {
    return this.idCustomer;
  }

  getCustNum() {
    return this.custNum;
  }
}
