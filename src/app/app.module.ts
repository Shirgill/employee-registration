import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';

import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'; // <-- NgModel lives here

import { WorkerService } from './worker.service';
import { EmployeeRoutingModule } from './/employee-routing.module';

import { HttpModule } from '@angular/http';
import { AddemployeeComponent } from './addemployee/addemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	EmployeeRoutingModule,
	HttpModule 
  ],
  providers: [ WorkerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
