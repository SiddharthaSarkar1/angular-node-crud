import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  {path: '', component: EmployeesComponent},
  {path: 'edit/:id', component: EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
