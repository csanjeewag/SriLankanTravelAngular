import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ViewsComponent } from './views/views.component';
import { AddViewComponent } from './add-view/add-view.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { AllPagesComponent } from './all-pages/all-pages.component';
import { PagesStateComponent } from './pages-state/pages-state.component';
import { AllImagesComponent } from './all-images/all-images.component';
import { AuthGuradGuard } from "./../AuthGuard/auth-gurad.guard";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'addview', component: AddViewComponent,canActivate:[AuthGuradGuard],data: { expectedRole1: 'user',expectedRole2: 'admin'}},
      { path: 'admin', component: PagesStateComponent,canActivate:[AuthGuradGuard],data: { expectedRole1: 'admin'}},
      { path: 'updateview/:id', component: UpdatePageComponent,canActivate:[AuthGuradGuard],data: { expectedRole2: 'admin'}},
      { path: 'allimage/:id', component: AllImagesComponent,canActivate:[AuthGuradGuard],data: { expectedRole2: 'admin'}},
      { path: 'side', component: SideBarComponent,children:[
        { path: 'travel', component: AllPagesComponent },
        { path: 'travel/:id', component: ViewsComponent },
        
      ]}
    ])
  ],
  declarations: [SideBarComponent, ViewsComponent, AddViewComponent, UploadPageComponent, UpdatePageComponent, AllPagesComponent, PagesStateComponent, AllImagesComponent]
})
export class ViewPagesModule { }
