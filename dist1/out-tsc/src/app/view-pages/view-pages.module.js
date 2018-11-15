"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var side_bar_component_1 = require("./side-bar/side-bar.component");
var views_component_1 = require("./views/views.component");
var add_view_component_1 = require("./add-view/add-view.component");
var upload_page_component_1 = require("./upload-page/upload-page.component");
var update_page_component_1 = require("./update-page/update-page.component");
var all_pages_component_1 = require("./all-pages/all-pages.component");
var pages_state_component_1 = require("./pages-state/pages-state.component");
var all_images_component_1 = require("./all-images/all-images.component");
var auth_gurad_guard_1 = require("./../AuthGuard/auth-gurad.guard");
var ViewPagesModule = /** @class */ (function () {
    function ViewPagesModule() {
    }
    ViewPagesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild([
                    { path: 'addview', component: add_view_component_1.AddViewComponent },
                    { path: 'admin', component: pages_state_component_1.PagesStateComponent, canActivate: [auth_gurad_guard_1.AuthGuradGuard], data: { expectedRole1: 'admin' } },
                    { path: 'updateview/:id', component: update_page_component_1.UpdatePageComponent },
                    { path: 'allimage/:id', component: all_images_component_1.AllImagesComponent },
                    { path: 'side', component: side_bar_component_1.SideBarComponent, children: [
                            { path: 'travel', component: all_pages_component_1.AllPagesComponent },
                            { path: 'travel/:id', component: views_component_1.ViewsComponent },
                        ] }
                ])
            ],
            declarations: [side_bar_component_1.SideBarComponent, views_component_1.ViewsComponent, add_view_component_1.AddViewComponent, upload_page_component_1.UploadPageComponent, update_page_component_1.UpdatePageComponent, all_pages_component_1.AllPagesComponent, pages_state_component_1.PagesStateComponent, all_images_component_1.AllImagesComponent]
        })
    ], ViewPagesModule);
    return ViewPagesModule;
}());
exports.ViewPagesModule = ViewPagesModule;
//# sourceMappingURL=view-pages.module.js.map