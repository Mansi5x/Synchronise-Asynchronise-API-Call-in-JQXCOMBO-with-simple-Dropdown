import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ValueService {
  [x: string]: any;

  private currencyurl = 'http://localhost:52914/api/ServiceMaster/GetCurrencyMasters';
  private Countryurl = 'http://localhost:52914/API/ServiceMaster/GetCountryMasters';
  private stateurl = 'http://localhost:52914/API/ServiceMaster/GetStateMasters/IND';
  private selurl = 'http://localhost:52914/API/ServiceMaster/GetStateMasters';
  constructor(private http: HttpClient) {

  }
    async getcurrencyservice() {
    return await this.http.get(`${this.currencyurl}`).toPromise();
    }
    getcountryservice() {
    return this.http.get(`${this.Countryurl}`);
     }
    getstateservice() {
    return this.http.get(`${this.stateurl}`);
      }
    getstate(countryID: string) {
    return this.http.get(`${this.selurl}/${countryID}`);
    }
}









