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

    //subject to trigger events
    private mySubject: Subject<any> = new Subject<any>();
    //observable to listen to events
    public readonly dataReceived$: Observable<any> = this.mySubject.asObservable();
  
    //
    broadcast(data: any)
    {
      this.mySubject.next(data);
    }

  constructor(private http: HttpClient) { }

  public getBrands(): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetBrand`, null);
  }

  public getCountries(): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetParametros`, {"tabla": "COUNTRY"});
  }
  public getRegion(country_id:number): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetRegion`, {"country": country_id});
  }

  public getProducers(): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(`${this.apiServerUrl}/Productos/GetProducer`, {"producer": 0});
  }
}
