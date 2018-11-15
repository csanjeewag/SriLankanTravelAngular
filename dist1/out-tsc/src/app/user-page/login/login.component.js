"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var repository_service_1 = require("./../../ShareData/repository.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, repository, fb) {
        this.router = router;
        this.route = route;
        this.repository = repository;
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
        this.signupForm = new forms_1.FormGroup({
            fname: new forms_1.FormControl('', [forms_1.Validators.required]),
            lname: new forms_1.FormControl(''),
            email: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required]),
            confirmpassword: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
    };
    LoginComponent.prototype.signup = function (value) {
        var _this = this;
        console.log(value);
        if (this.signupForm.valid) {
            var formData = new FormData();
            formData.append('FName', value.fname);
            formData.append('LName', value.lname);
            formData.append('Email', value.email);
            formData.append('Password', value.password);
            var apiUrl = 'signup';
            this.repository.postFile(apiUrl, formData)
                .subscribe(function (res) {
                console.log(res);
                _this.router.navigate(['view/side/travel']);
            }, (function (error) {
                // this.Message = "Adding Page Failed!";
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
                console.log(res);
                _this.router.navigate(['view/side/travel']);
            }, (function (error) {
                // this.Message = "Adding Page Failed!";
            }));
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [router_2.Router, router_1.ActivatedRoute, repository_service_1.RepositoryService, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map