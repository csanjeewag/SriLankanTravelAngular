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
var login_component_1 = require("./login/login.component");
var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild([
                    { path: 'login', component: login_component_1.LoginComponent },
                ])
            ],
            declarations: [login_component_1.LoginComponent]
        })
    ], UserPageModule);
    return UserPageModule;
}());
exports.UserPageModule = UserPageModule;
//# sourceMappingURL=user-page.module.js.map