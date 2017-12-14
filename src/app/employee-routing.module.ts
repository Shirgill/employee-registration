import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';


const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent },
  { path: 'createEmployee', component: AddemployeeComponent }
];



@NgModule({
  imports: [
    CommonModule,  RouterModule.forRoot(routes)
  ],
  declarations: [],
  
  exports: [ RouterModule ]
})
export class EmployeeRoutingModule { }
