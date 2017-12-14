import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
//import { EMPLOYEES } from '../mock-employees';

import { WorkerService } from '../worker.service';
 
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
	
  employeeId : string;
  //employees = EMPLOYEES;
  employees: Employee[];
  selectedEmployee: Employee; 
  fetchedEmployeeFromDB : Employee;
  
  constructor( private workerService : WorkerService) { }

  ngOnInit() {
	   this.getAllEmployees();
  }
  
  onSelect(employee: Employee): void {
	this.selectedEmployee = employee;
  }
    
  getAllEmployees(): void {
	this.workerService.getAllEmployees()
		.subscribe(employees => this.employees = employees);
  }
  
}
