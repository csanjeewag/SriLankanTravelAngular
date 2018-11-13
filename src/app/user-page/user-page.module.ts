import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent},
      
    ])
  ],
  declarations: [LoginComponent]
})
export class UserPageModule { }
