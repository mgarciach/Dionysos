import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerProfile } from '../model/customer';
import { RequestBodyAccountHistoryByDates, RequestBodyCustomer, RequestBodyGetHistoryByDates, RequestBodyIdCustomer } from '../model/requestBodyCustomer';
import { ResponseBody } from '../model/responseBody';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCustomers(requestBody: RequestBodyCustomer): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Customer/GetCustomer`, requestBody);
  }

  getProFileCustomer(requestBody: RequestBodyIdCustomer): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Customer/GetProFileCustomer`, requestBody);
  }

  updateProFileCustomer(requestBody: any): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Customer/UpdateCustomer`, requestBody);
  }

  getHistoryCustomer(requestBody: RequestBodyGetHistoryByDates): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Customer/GetHistoryByDates`, requestBody);
  }

  getAccountHistory(requestBody: RequestBodyAccountHistoryByDates): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Customer/GetAccountPayablesByDates`, requestBody);
  }
}
