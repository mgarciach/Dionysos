import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestBodyCustomer } from '../model/requestBodyCustomer';
import { ResponseBody } from '../model/responseBody';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getCustomers(requestBody: RequestBodyCustomer): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Customer/GetCustomer`, requestBody);
  }
}
