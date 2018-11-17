import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
import { UsersPageComponent } from './users-page/users-page.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent},
      { path: 'allusers', component: UsersPageComponent},
      { path: 'register', component: RegisterUserComponent},
      { path: 'forgetpassword', component: ForgetPasswordComponent},
      
    ])
  ],
  declarations: [LoginComponent, UsersPageComponent, RegisterUserComponent, ForgetPasswordComponent]
})
export class UserPageModule { }
