import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { EMPLOYEES } from './mock-employees';
import { Employee } from './employee';

@Injectable()
export class WorkerService {
	 
  constructor(private http: Http) {      
  }
  
  getAllEmployees(): Observable<Employee[]> {
	return this.http.get('http://localhost:8080/employee-registration/employees').map(res => res.json());	
  }
    
  getEmployee(employeeId : string):Observable<Employee> {
    return this.http.get('http://localhost:8080/employee-registration/employee/'+ employeeId).map(res => res.json());
  }
  
  private getHeaders(){
    // Include these headers because otherwise FireFox will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
	headers.append('Content-Type', 'application/json');
    return headers;
  }
  
  addEmployee( employee : Employee ) : Observable<Response> {
	  return this.http.post('http://localhost:8080/employee-registration/addEmployee/', JSON.stringify(employee),
            {headers: this.getHeaders()}).map(res => res.json());
  }
  
  deleteEmployee(employeeId : string) : Observable<Response> {
	  return this.http.get('http://localhost:8080/employee-registration/deleteEmployee/'+ employeeId).map(res => res.json());
  }
  
  updateEmployee(employee : Employee ) : Observable<Response> {
	  return this.http.post('http://localhost:8080/employee-registration/updateEmployee/', JSON.stringify(employee),
            {headers: this.getHeaders()}).map(res => res.json());
  }

}
