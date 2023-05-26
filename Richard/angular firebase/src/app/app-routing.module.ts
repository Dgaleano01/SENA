import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CrateEmployeesComponent } from './components/crate-employees/crate-employees.component';
const routes: Routes = [
  {path: '', component:ListEmployeesComponent, pathMatch: 'full'},
  {path: 'list-employee', component:ListEmployeesComponent},
  {path: 'create-employee', component: CrateEmployeesComponent},
  {path: '**', component:ListEmployeesComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
