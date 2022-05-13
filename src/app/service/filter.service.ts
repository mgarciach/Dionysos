import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseBody } from '../model/responseBody';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private apiServerUrl = environment.apiUrl;

  private filterData = new Subject<any>();
  newFilterData$ = this.filterData.asObservable();

  broadcast(data: any)
  {
    this.filterData.next(data);
  }

  constructor(private http: HttpClient) { }

  getBrands(): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetBrand`, null);
  }

  getCountries(): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetParametros`, {"tabla": "COUNTRY"});
  }

  getCities(state: string): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetCities`, {"tabla": "city", "state": state});
  }

  getStates(): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetParametros`, {"tabla": "state"});
  }

  getCustTypes(): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetParametros`, {"tabla": "custype"});
  }

  getRegion(country_id:number): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetRegion`, {"country": country_id});
  }

  getProducers(): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetProducer`, {"producer": 0});
  }
}
