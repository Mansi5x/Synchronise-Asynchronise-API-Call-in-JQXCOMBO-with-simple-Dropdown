import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  Countries: {};
  Country_ID : any;
  States: any;
  a: any;
  item: any;
  constructor( private http: HttpClient) {
    this.Getcountry1list();
    this.getcountrytostate(this.a);
  }
   title = 'SYNCAPI/example';
   ddlCountry = ' ';
   ddlState = '';
   onSubmit() {
     alert('Its Printed:' + this.ddlCountry);
   }
   onDone() {
     alert('State Print: ' + this.ddlState);
   }
   changecountry(Country_ID) {
   console.log( "Hello" + Country_ID);
   this.States = this.getcountrytostate(Country_ID);
   }
  ngOnInit() {
    }
    Getcountry1list() {
      this.http.get(`http://localhost:52914/API/ServiceMaster/GetCountryMasters`).subscribe
      (data => this.Countries = data  );
      this.Countries = Array.of(this.Countries);
    }
    getcountrytostate(Country_ID) {
      console.log(" Country_ID: "  + Country_ID);
      if (Country_ID !== undefined) {
      Country_ID = Country_ID.slice(0, 3);
      console.log( "Country_ID:"  + Country_ID); }
      this.http.get(`http://localhost:52914/API/ServiceMaster/GetStateMasters/` + Country_ID).subscribe
      (data => { console.log (data);
      this.States = data;
      }, error => console.log(error));


    }
    // getStatelist() {
    //   this.http.get(`http://localhost:52914/API/ServiceMaster/GetStateMasters/IND` ).subscribe
    //   (data => this.States = data );
    // }
  }


