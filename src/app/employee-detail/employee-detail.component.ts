import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { WorkerService } from '../worker.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
	
  @Input() employee : Employee;
  addEmployeeFlag : boolean;
  isEmployeeDeletedSuccessfully : boolean; 
  isEmployeeUpdatedSuccessfully : boolean;
  isEmployeeAddedSuccessfully : boolean;

  constructor(private workerService : WorkerService, private router: Router) { 
	router.events.subscribe();
	this.workerService.getEmployee(router.url.split('/')[router.url.split('/').length - 1]).subscribe(res => this.employee = res);		
  }

  ngOnInit() {	  
  }
   
  deleteEmployee(employeeId : string) : void {
	  this.workerService.deleteEmployee(employeeId)
		.subscribe(res => this.isEmployeeDeletedSuccessfully = res);
  }
  
  updateEmployee(employee :Employee): void {
	  this.workerService.updateEmployee(employee)
		.subscribe(res => this.isEmployeeUpdatedSuccessfully = res);
  }

}
