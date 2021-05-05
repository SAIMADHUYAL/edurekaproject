import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveComponentComponent } from './reactive-component/reactive-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TemplateFormComponent,
    ReactiveComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
