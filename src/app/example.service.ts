import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) {

   }
   exampleurl = 'http://localhost:52914/api/ServiceMaster/GetCurrencyMasters';
   getexample() {
     return this.http.get(this.exampleurl);
   }
}
