import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestBodyProduct } from '../model/requestBodyProduct';
import { environment } from 'src/environments/environment';
import { ResponseBody } from '../model/responseBody';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getProducts(requestBody: RequestBodyProduct): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetProductos`, requestBody);
  }

}
