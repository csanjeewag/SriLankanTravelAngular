import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
import { UsersPageComponent } from './users-page/users-page.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent},
      { path: 'allusers', component: UsersPageComponent},
      
    ])
  ],
  declarations: [LoginComponent, UsersPageComponent]
})
export class UserPageModule { }
