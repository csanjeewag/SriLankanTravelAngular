(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-page-user-page-module"],{

/***/ "./src/app/user-page/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-page/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n    margin-top: 3%;\r\n    padding: 3%;\r\n}\r\n.register-left{\r\n    text-align: center;\r\n    color: #fff;\r\n    margin-top: 4%;\r\n}\r\n.register-left input{\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    padding: 2%;\r\n    width: 60%;\r\n    background: #f8f9fa;\r\n    font-weight: bold;\r\n    color: #383d41;\r\n    margin-top: 30%;\r\n    margin-bottom: 3%;\r\n    cursor: pointer;\r\n}\r\n.register-right{\r\n    background: #f8f9fa;\r\n    border-top-left-radius: 10% 50%;\r\n    border-bottom-left-radius: 10% 50%;\r\n}\r\n.register-left img{\r\n    margin-top: 15%;\r\n    margin-bottom: 5%;\r\n    width: 25%;\r\n    -webkit-animation: mover 2s infinite  alternate;\r\n    animation: mover 1s infinite  alternate;\r\n}\r\n@-webkit-keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n@keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n.register-left p{\r\n    font-weight: lighter;\r\n    padding: 12%;\r\n    margin-top: -9%;\r\n}\r\n.register .register-form{\r\n    padding: 10%;\r\n    margin-top: 10%;\r\n}\r\n.btnRegister{\r\n    float: right;\r\n    margin-top: 10%;\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    padding: 2%;\r\n    background: #0062cc;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    width: 50%;\r\n    cursor: pointer;\r\n}\r\n.register .nav-tabs{\r\n    margin-top: 3%;\r\n    border: none;\r\n    background: #0062cc;\r\n    border-radius: 1.5rem;\r\n    width: 28%;\r\n    float: right;\r\n}\r\n.register .nav-tabs .nav-link{\r\n    padding: 2%;\r\n    height: 34px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-top-right-radius: 1.5rem;\r\n    border-bottom-right-radius: 1.5rem;\r\n}\r\n.register .nav-tabs .nav-link:hover{\r\n    border: none;\r\n}\r\n.register .nav-tabs .nav-link.active{\r\n    width: 100px;\r\n    color: #0062cc;\r\n    border: 2px solid #0062cc;\r\n    border-top-left-radius: 1.5rem;\r\n    border-bottom-left-radius: 1.5rem;\r\n}\r\n.register-heading{\r\n    text-align: center;\r\n    margin-top: 8%;\r\n    margin-bottom: -15%;\r\n    color: #495057;\r\n}\r\n.ng-valid:not(form) {\r\n    border-left: 10px solid rgb(66, 111, 169); /* green */\r\n    background-color: rgb(182, 253, 185);\r\n  }\r\n.ng-invalid:not(form)  {\r\n    border-left: 10px solid #fd8c8b; /* red */\r\n    background-color: #ffe2e2;\r\n  }\r\n#error{\r\n      color: #da1310;\r\n  }"

/***/ }),

/***/ "./src/app/user-page/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-page/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"container register\">\n        <h3 id=\"error\"><b>{{msg}}</b></h3>\n                <div class=\"row\">\n                    <div class=\"col-md-3 register-left\">\n                        <!-- <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\"/> -->\n                        <h3>Loggin Here</h3>\n                        <form [formGroup]=\"loginForm\" autocomplete=\"off\" novalidate (ngSubmit)=\"login(loginForm.value)\">\n\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <input formControlName=\"email\"  type=\"email\" class=\"form-control\" placeholder=\"Your Email *\" value=\"\" />\n                               \n                                    <input formControlName=\"password\"  type=\"password\" class=\"form-control\" placeholder=\"Password *\" value=\"\" />\n                                </div>\n                            </div>\n                            <input type=\"submit\" name=\"\" value=\"Login\"/>\n                          </form>\n                          <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\"/>\n                    </div>\n                    <div class=\"col-md-9 register-right\">\n                        <ul class=\"nav nav-tabs nav-justified\" id=\"myTab\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">User</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Admin</a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                                <h3 class=\"register-heading\">Regiter as a User!</h3>\n                                \n                                <form [formGroup]=\"signupForm\" autocomplete=\"off\" novalidate (ngSubmit)=\"signup(signupForm.value)\">\n        \n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input formControlName=\"fname\" type=\"text\" class=\"form-control\" placeholder=\"First Name *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input formControlName=\"lname\"  type=\"text\" class=\"form-control\" placeholder=\"Last Name *\" value=\"\" />\n                                        </div>\n                                       \n                                        \n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input formControlName=\"email\"  type=\"email\" class=\"form-control\" placeholder=\"Your Email *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input formControlName=\"password\"  type=\"password\" class=\"form-control\" placeholder=\"Password *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input formControlName=\"confirmpassword\" type=\"password\" class=\"form-control\"  placeholder=\"Confirm Password *\" value=\"\" />\n                                        </div>\n                                       \n                                    \n                                        <input [disabled]=\"!ownerForm.valid\" type=\"submit\" class=\"btnRegister\"  value=\"Sign Up\"/>\n                                    </div>\n                                </div>\n                              </form>\n                              \n                            </div>\n                           \n                        </div>\n                    </div>\n                </div>\n\n            </div>"

/***/ }),

/***/ "./src/app/user-page/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-page/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ShareData_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../ShareData/repository.service */ "./src/app/ShareData/repository.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, repository, fb) {
        this.router = router;
        this.route = route;
        this.repository = repository;
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    LoginComponent.prototype.signup = function (value) {
        var _this = this;
        if (this.signupForm.valid) {
            var formData = new FormData();
            formData.append('FName', value.fname);
            formData.append('LName', value.lname);
            formData.append('Email', value.email);
            formData.append('Password', value.password);
            var apiUrl = 'signup';
            this.repository.postFile(apiUrl, formData)
                .subscribe(function (res) {
                _this.result = res;
                localStorage.setItem('token', _this.result.token);
                _this.msg = "signup successfull!";
                _this.router.navigate(['view/side/travel']);
            }, (function (error) {
                // this.Message = "Adding Page Failed!";
                _this.msg = "signup failed!";
            }));
        }
    };
    LoginComponent.prototype.login = function (value) {
        var _this = this;
        if (this.loginForm.valid) {
            var formData = new FormData();
            formData.append('Email', value.email);
            formData.append('Password', value.password);
            var apiUrl = 'login';
            this.repository.postFile(apiUrl, formData)
                .subscribe(function (res) {
                _this.result = res;
                localStorage.setItem('token', _this.result.token);
                _this.msg = "login successfull!";
                _this.router.navigate(['view/side/travel']);
            }, (function (error) {
                // this.Message = "Adding Page Failed!";
                _this.msg = "login failed!";
            }));
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user-page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user-page/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ShareData_repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user-page/user-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/user-page/user-page.module.ts ***!
  \***********************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user-page/login/login.component.ts");
/* harmony import */ var _users_page_users_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-page/users-page.component */ "./src/app/user-page/users-page/users-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                    { path: 'allusers', component: _users_page_users_page_component__WEBPACK_IMPORTED_MODULE_5__["UsersPageComponent"] },
                ])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _users_page_users_page_component__WEBPACK_IMPORTED_MODULE_5__["UsersPageComponent"]]
        })
    ], UserPageModule);
    return UserPageModule;
}());



/***/ }),

/***/ "./src/app/user-page/users-page/users-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-page/users-page/users-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headerImage{\r\n    height: 150px;\r\n    z-index: -1;\r\n}\r\n#pageImage{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/user-page/users-page/users-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user-page/users-page/users-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"form-row\">\n  <div class=\"form-group col-md-10 container\">\n          <div class=\"card\">\n                  <h5 class=\"card-header\"><h2>Sri Lankan Travelling</h2>   <img class=\"card-img-top\" src=\"assets/back.jpeg\" alt=\"Cinque Terre\" id=\"headerImage\"></h5>\n                \n<table class=\"table table-hover\">\n  <thead>\n  <tr >\n      <th>Full Name</th>\n    <th>Email</th>\n    <th>Register Date</th>\n    <th>Role</th>\n    <th>Change State</th>\n   \n   \n  </tr></thead>\n  <tbody>\n  <tr *ngFor=\"let u of users\" >\n    <td>{{u.fname}} {{u.lname}}</td>\n    <td>{{u.email}}</td>\n    <td>{{u.startDate}}</td>\n    <td>{{u.role}}</td>\n    <!-- <td (click)=gotopage(p.id)><img  class=\"card-img-top\" [src]=\"imageUrl+p.imageId\" alt=\"Cinque Terre\" id=\"pageImage\" (click)=gotopage(p.id)></td>\n     -->\n          <td *ngIf=\"u.role == 'user'\"><button type=\"button\" id=\"update\" class=\"btn  btn-danger\" (click)=ToAdmin(u.email)>As Admin</button></td>\n          <td  *ngIf=\"u.role == 'admin'\"><button type=\"button\" id=\"update\" class=\"btn  btn-success\" (click)=ToUser(u.email)>As User</button></td>\n         \n   \n  </tr>\n  </tbody>\n</table>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-page/users-page/users-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-page/users-page/users-page.component.ts ***!
  \**************************************************************/
/*! exports provided: UsersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageComponent", function() { return UsersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ShareData_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../ShareData/repository.service */ "./src/app/ShareData/repository.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersPageComponent = /** @class */ (function () {
    function UsersPageComponent(repository, route, router) {
        this.repository = repository;
        this.route = route;
        this.router = router;
    }
    UsersPageComponent.prototype.ngOnInit = function () {
        this.getusers();
    };
    UsersPageComponent.prototype.getusers = function () {
        var _this = this;
        this.repository.getData('getuserdetails')
            .subscribe(function (res) {
            _this.users = res;
        }, function (error) {
        });
    };
    UsersPageComponent.prototype.ToAdmin = function (email) {
        this.repository.getData('toadmin/' + email)
            .subscribe(function (res) {
            location.reload();
        }, function (error) {
        });
    };
    UsersPageComponent.prototype.ToUser = function (email) {
        this.repository.getData('touser/' + email)
            .subscribe(function (res) {
            location.reload();
        }, function (error) {
        });
    };
    UsersPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-page',
            template: __webpack_require__(/*! ./users-page.component.html */ "./src/app/user-page/users-page/users-page.component.html"),
            styles: [__webpack_require__(/*! ./users-page.component.css */ "./src/app/user-page/users-page/users-page.component.css")]
        }),
        __metadata("design:paramtypes", [_ShareData_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsersPageComponent);
    return UsersPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=user-page-user-page-module.js.map