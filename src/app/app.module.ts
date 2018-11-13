import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainNavBarComponent } from './SharePart/main-nav-bar/main-nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  { path: 'view', loadChildren: "./view-pages/view-pages.module#ViewPagesModule" },
  { path: 'user', loadChildren: "./user-page/user-page.module#UserPageModule" },
  { path: 'login', component: MainNavBarComponent },
  
 // { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavBarComponent,
  
 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})



export class AppModule { }
