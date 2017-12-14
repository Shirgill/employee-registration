import { Component, OnInit, Input } from '@angular/core';
import { WorkerService } from '../worker.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  employee : Employee = new Employee();
  isEmployeeAddedSuccessfully : boolean;
  idgenerated : number;
  
  constructor(private workerService : WorkerService) { }

  ngOnInit() {
  }
  
  addEmployee(employee :Employee): void {
	  this.workerService.addEmployee(employee)
		.subscribe(res => this.employee.id = res);
  }

}
