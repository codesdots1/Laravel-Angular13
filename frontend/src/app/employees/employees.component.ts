import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
     private emloyeeService: EmployeeService ,
     private router: Router,
     private modalService: NgbModal,
     private route: ActivatedRoute,
     private toastr: ToastrService) { }

  employees: any;
  employee: any;
  SendEmailData : any;
  closeResult: string = '';
  employeeId: any;
  showMessageDiv: boolean = false;
  sendmailname : any;
  Sendcostomeemail : any;
  Sendcostomerid: any;
  employeelist : any;
  TosterMassage :string = '';

  ngOnInit(): void {
    this.showEmployees();

  }

  showEmployees(){
    this.modalService.dismissAll();
    this.employees = this.employeeService.listEmployees().subscribe(employee=>{
      this.employeelist = employee;
    });
  }

  deleteEmployee(id:any){
    this.employeeService.deleteEmployee(id).subscribe(
      res => {

    this.showMessageDiv = true;
    this.TosterMassage = "Record Delete Successfully"
        this.showEmployees();
      }
    );
  }
  hideTostermassage(){
    this.showMessageDiv = false
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      const routeParams = this.route.snapshot.paramMap;
      this.employeeId = Number(routeParams.get('employeeId'));
    this.employeeService.find(this.employeeId).subscribe((data:any)=>{
      if(data != ''){
        this.employees = data;
      }
    });
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openEdit(ID : any,content:any) {
    this.employeeService.find(ID).subscribe((data:any)=>{
      if(data != ''){
        this.employeeId = ID;
        this.employees = data;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
});
this.router.navigate(['/']);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  add(){
    if(this.employeeId > 0){
      this.employeeService.update(this.employeeId, this.employees).subscribe((res)=>{});

      this.showMessageDiv = true;
      this.TosterMassage = "Record Updated Successfully"
    }
    else{
        this.employees = {
          'employee_name': this.employees.employee_name,
          'employee_address': this.employees.employee_address,
          'employee_contact': this.employees.employee_contact,
          'employee_email': this.employees.employee_email,
          'gender': this.employees.gender,
          'education_grade': this.employees.education_grade,
          'education_start_date': this.employees.education_start_date,
          'education_end_date': this.employees.education_end_date,
          'employee_field_study': this.employees.employee_field_study,
          'employee_degree': this.employees.employee_degree,
          'expersion_location': this.employees.expersion_location,
          'experience_start_date': this.employees.experience_start_date,
          'experience_end_date': this.employees.experience_end_date,
          'employee_designation':this.employees.employee_designation,
          'employee_expersion':this.employees.employee_expersion,
          'company_name': this.employees.company_name,
          'employee_profile': this.employees.employeeProfile,
          'date_of_birth': this.employees.date_of_birth,
          'employee_education' :this.employees.employee_education,
          'employee_technical_skill': this.employees.employee_technical_skill
        };
        this.emloyeeService.addEmployees(this.employees as any).subscribe(employee=>{
          this.employees = employee;
          this.showMessageDiv = true;
          this.TosterMassage = "Record Added Successfully"
          this.showEmployees();
        });
    }
    this.showEmployees();
  }
  SendProfile(ID : any, Email : any){
    this.SendEmailData = {
      'id': ID,
      'email': Email,
    };
    this.employeeService.find(ID).subscribe((data:any)=>{
      this.employee = data;

    });
    this.employee.employee_email = this.Sendcostomeemail;
    this.employees = {
      'id' : ID,
      'employee_name': this.sendmailname,
      'employee_email': this.Sendcostomeemail,
    };

    this.emloyeeService.SendEmail(this.employees as any).subscribe(data=>{
      debugger
      this.showMessageDiv = true;
      this.TosterMassage = "Email send Successfully"
      this.showEmployees();
    });

  }

  openSendEmail(content: any,id : any,email:any,name: any){
    this.Sendcostomerid = id;
    this.Sendcostomeemail = email;
    this.sendmailname =name;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });


  }
}
