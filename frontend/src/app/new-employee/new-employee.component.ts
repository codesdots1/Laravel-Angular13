import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private emloyeeService: EmployeeService, private router: Router) { }

  employees: any;

  ngOnInit(): void {
  }

  add(employeeName:string,employeeEmail:string,employeeAddress:string,employeeContact:string,employeeGender:string,employeeDOB:string,employeeProfile:string,employeeCompany:string,employeePosition:string,employeeExpersion:string,employeeLocation:string,employeeExpStartDate:string,employeeExpEndDate:string,employeeTechnicalSkills:string,employeeEduction:string,employeeDegree:string,employeeStudy:string,employeeGrade:string,employeeEduStartDate:string,employeeEduEndDate:string){
    this.employees = {
      'employee_name': employeeName,
      'employee_address': employeeAddress,
      'employee_contact': employeeContact,
      'employee_email': employeeEmail,
      'gender': employeeGender,
      'education_grade': employeeGrade,
      'education_start_date': employeeEduStartDate,
      'education_end_date': employeeEduEndDate,
      'employee_field_study': employeeStudy,
      'employee_degree': employeeDegree,
      'expersion_location': employeeLocation,
      'experience_start_date': employeeExpStartDate,
      'experience_end_date': employeeExpEndDate,
      'employee_designation':employeePosition,
      'employee_expersion':employeeExpersion,
      'company_name': employeeCompany,
      'employee_profile': employeeProfile,
      'date_of_birth': employeeDOB,
      'employee_education' :employeeEduction,
      'employee_technical_skill': employeeTechnicalSkills
    };
    this.emloyeeService.addEmployees(this.employees as any).subscribe(employee=>{
      this.employees = employee;
    });
    this.router.navigateByUrl('/');
  }

}
