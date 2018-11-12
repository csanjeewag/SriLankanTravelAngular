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

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'addview', component: AddViewComponent},
      { path: 'admin', component: PagesStateComponent},
      { path: 'updateview/:id', component: UpdatePageComponent},
      { path: 'allimage/:id', component: AllImagesComponent},
      { path: 'side', component: SideBarComponent,children:[
        { path: 'travel', component: AllPagesComponent },
        { path: 'travel/:id', component: ViewsComponent },
        
      ]}
    ])
  ],
  declarations: [SideBarComponent, ViewsComponent, AddViewComponent, UploadPageComponent, UpdatePageComponent, AllPagesComponent, PagesStateComponent, AllImagesComponent]
})
export class ViewPagesModule { }
