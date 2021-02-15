import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { ValueService } from '../value.service';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async } from '@angular/core/testing';
import { getCurrencySymbol } from '@angular/common';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
   @ViewChild('selectionlog', { static: false }) selectionlog: ElementRef;
   @ViewChild('selectionlog1', { static: false }) selectionlog1: ElementRef;
   @ViewChild('selectionlog2', { static: false }) selectionlog2: ElementRef;
   @ViewChild('myComboBox', { static: false } )myComboBox: jqxComboBoxComponent;
  constructor(private vals: ValueService) { }
  result: any; result1: any; result2: any;
  mb = 'IND';
  dataAdapter2: any;
  args: any;
  a: any;
  source: any =
    {   datatype: 'json',
        datafields: [
            { name: 'Currency_ID' },
            { name: 'Name' }
        ],
        id: 'id',
        url: 'http://localhost:52914/api/ServiceMaster/GetCurrencyMasters',
    };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  source1: any =
{   datatype: 'json',
    datafields: [
        { name: 'Country_ID' },
        { name: 'Name' }
    ],
    id: 'id',
    url: 'http://localhost:52914/API/ServiceMaster/GetCountryMasters',

  };
dataAdapter1: any = new jqx.dataAdapter(this.source1);

source2: any =
{   datatype: 'json',
    datafields: [
        { name: 'State_Name' },
        { name: 'Name' }
    ],
    id: 'id'
};
// dataAdapter2: any = new jqx.dataAdapter(this.source2);
  myComboBoxOnSelect(event: any): void {
    if (event.args) {
        const item = event.args.item;
        if (item) {
            const valueElement = document.createElement('div');
            valueElement.innerHTML = 'Currency ShortForm: ' + item.value;
            const labelElement = document.createElement('div');
            labelElement.innerHTML = 'Currency name: ' + item.label;
            const selectionLog = this.selectionlog.nativeElement;
            selectionLog.innerHTML = '';
            selectionLog.appendChild(labelElement);
            selectionLog.appendChild(valueElement);
        }
  }
}
myComboBoxOncountry(event: any): void {
if (event.args) {
  const item = event.args.item;
  if (item) {
        const valueElement = document.createElement('div');
        valueElement.innerHTML = 'Country_ID: ' + item.value;
        const labelElement = document.createElement('div');
        labelElement.innerHTML = 'Country Name: ' + item.label;
        const selectionLog1 = this.selectionlog1.nativeElement;
        selectionLog1.innerHTML = '';
        selectionLog1.appendChild(labelElement);
        selectionLog1.appendChild(valueElement);
        this.mb = item.value;
        // this.mb = item.options.target.selectedIndex(0).value;
        this.vals.getstate(this.mb).subscribe(data => {
        console.log(data);
        this.source2 = data;
        this.dataAdapter2 = new jqx.dataAdapter(this.source2);
        }, error => console.log(error));
    }
}
}
myComboBoxOnState(event: any): void {
  if (event.args) {
      const item = event.args.item;
      if (item) {
          const valueElement = document.createElement('div');
          valueElement.innerHTML = 'Value: ' + item.value;
          const labelElement = document.createElement('div');
          labelElement.innerHTML = 'Label: ' + item.label;
          const selectionLog2 = this.selectionlog2.nativeElement;
          selectionLog2.innerHTML = '';
          selectionLog2.appendChild(labelElement);
          selectionLog2.appendChild(valueElement);
      }
}
}
   ngOnInit() {
        // this.getCurrencyasync() ;
    /*Country URL Load event par call */
    // this.vals.getcountryservice().subscribe(data => {
    //   console.log(data);
    //   this.result1 = data;
    //   this.source1 = data;
    //   console.log ('My Name' + JSON.stringify(this.source1) );
    //  }, error => console.log(error));
       /*Currency service API Bind in page load */
    // this.vals.getcurrencyservice().subscribe(data => {
    // console.log(data);
    // this.result = data;
    // this.source = data;
    //  }, error => console.log(error));
      /*State Service API Bind in page load */
    // this.vals.getstateservice().subscribe(data => {
    //   console.log(data);
    //   this.result2 = data;
    //   this.source2 = data;
    //   console.log('HElloooooo' + JSON.stringify (this.source2));
    //    }, error => console.log(error));
  }
    getCurrencyasync() {
    this. a =  this.vals.getcurrencyservice();
    console.log(this.a);
    }
    ngAfterViewInit() {
    this.myComboBox.val('Select State');
    }
    }




