import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  employeeId: any;
  employee: any;
  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.employeeId = Number(routeParams.get('employeeId'));
    this.employeeService.find(this.employeeId).subscribe((data:any)=>{
      this.employee = data;
    });
  }

  update(employeeName:string,employeeEmail:string,employeeAddress:string,employeeContact:string,employeeGender:string,employeeDOB:string,employeeCompany:string,employeePosition:string,employeeExpersion:string,employeeLocation:string,employeeExpStartDate:string,employeeExpEndDate:string,employeeTechnicalSkills:string,employeeEduction:string,employeeDegree:string,employeeStudy:string,employeeGrade:string,employeeEduStartDate:string,employeeEduEndDate:string){
    this.employeeService.update(this.employeeId, this.employee).subscribe((res)=>{});
    this.router.navigateByUrl('/');
  }

}
