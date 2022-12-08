import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  listEmployees(){
    return this.http.get<any>(this.url+'api/employees');
  }

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  }

  addEmployees(employee:any): Observable<any>{
    return this.http.post<any>(this.url+'api/employees-store',employee,this.httpOptions);
  }

  find(id:number): Observable<any>{
    return this.http.get(this.url+'api/employee/'+id);
  }

  update(id:any,employee:any): Observable<any>{
    return this.http.put(this.url+'api/employees-update/'+id,employee,this.httpOptions);
  }

  deleteEmployee(id:any): Observable<any>{
    return this.http.delete(this.url+'api/employees-delete/'+id,this.httpOptions);
  }

  SendEmail(employee:any): Observable<any>{
    return this.http.post<any>(this.url+'api/employees-send-email',employee,this.httpOptions);
  }
}
