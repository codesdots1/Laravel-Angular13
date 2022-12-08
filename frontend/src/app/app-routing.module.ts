import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent, pathMatch: 'full' },
  {
    path: 'add', component: NewEmployeeComponent
  },
  {
    path: 'profile/:employeeId', component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
