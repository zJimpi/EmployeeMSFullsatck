import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  { path : 'employees' ,component : EmployeeListComponent},
  { path: 'fontPage', component:FrontpageComponent},
  { path: 'create-employee', component:CreateEmployeeComponent},
  { path: '', redirectTo: 'fontPage', pathMatch: 'full'},
  { path: 'update-employee/:id', component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
