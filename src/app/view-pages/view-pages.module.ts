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
import { RegisterSignupComponent } from './register-signup/register-signup.component';
import { AddTypeComponent } from './Type/add-type/add-type.component';
import { UpdateTypeComponent } from './Type/update-type/update-type.component';
import { ViewTypeComponent } from './Type/view-type/view-type.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { FilterPipes } from './filter-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'addview', component: AddViewComponent,canActivate:[AuthGuradGuard],data: { expectedRole1: 'user',expectedRole2: 'admin'}},
      { path: 'admin', component: PagesStateComponent,canActivate:[AuthGuradGuard],data: { expectedRole1: 'admin', expectedRole2: 'user'}},
      { path: 'updateview/:id', component: UpdatePageComponent,canActivate:[AuthGuradGuard],data: { expectedRole2: 'admin'}},
      { path: 'allimage/:id', component: AllImagesComponent,canActivate:[AuthGuradGuard],data: { expectedRole2: 'admin'}},
      { path: 'type', component: ViewTypeComponent},
      
      { path: 'side', component: SideBarComponent,children:[
        { path: 'travel', component: AllPagesComponent },
        { path: 'travel/:id', component: ViewsComponent },
        
      ]}
    ])
  ],
  declarations: [SideBarComponent, ViewsComponent, AddViewComponent, UploadPageComponent, UpdatePageComponent, AllPagesComponent, PagesStateComponent, AllImagesComponent, RegisterSignupComponent, AddTypeComponent, UpdateTypeComponent, ViewTypeComponent, FilterPipePipe,FilterPipes]
})
export class ViewPagesModule { }
