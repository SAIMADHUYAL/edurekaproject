import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {path: '', redirectTo : 'templateform' , pathMatch : 'full'},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'templateform', component : TemplateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
