import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient } from '@angular/common/http';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ExampleComponent} from './example/example.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    jqxComboBoxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
