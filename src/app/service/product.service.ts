import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestBodyProduct, RequestBodyProductDetail } from '../model/requestBodyProduct';
import { environment } from 'src/environments/environment';
import { ResponseBody } from '../model/responseBody';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl = environment.apiUrl;

  product!: Product;

  constructor(private http: HttpClient) { }

  public getProducts(requestBody: RequestBodyProduct): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetProductos`, requestBody);
  }

  public getProductDetails(requestBody: RequestBodyProductDetail): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetMemoProducto`, requestBody);
  }

  getProduct() {
    return this.product;
  }

  setProduct(product: Product) {
    this.product = product;
  }

}
