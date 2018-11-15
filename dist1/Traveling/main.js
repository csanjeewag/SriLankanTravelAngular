(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user-page/user-page.module": [
		"./src/app/user-page/user-page.module.ts",
		"user-page-user-page-module~view-pages-view-pages-module",
		"user-page-user-page-module"
	],
	"./view-pages/view-pages.module": [
		"./src/app/view-pages/view-pages.module.ts",
		"user-page-user-page-module~view-pages-view-pages-module",
		"view-pages-view-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/AuthGuard/auth-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/AuthGuard/auth-service.service.ts ***!
  \***************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ShareData_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../ShareData/repository.service */ "./src/app/ShareData/repository.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
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




var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(repository, router) {
        this.repository = repository;
        this.router = router;
    }
    AuthServiceService.prototype.loggout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/user/login']);
        // location.reload();
    };
    AuthServiceService.prototype.isAdmin = function () {
        if (this.tokencheckRole() == "admin") {
            return true;
        }
        else {
            return false;
        }
    };
    AuthServiceService.prototype.isUser = function () {
        if (this.tokencheckRole() == "user") {
            return true;
        }
        else {
            return false;
        }
    };
    AuthServiceService.prototype.islogged = function () {
        var token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthServiceService.prototype.istokenExpired = function () {
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        var token = localStorage.getItem('token');
        var ex = helper.isTokenExpired(token);
        if (ex == true) {
            localStorage.removeItem('token');
        }
        return ex;
    };
    AuthServiceService.prototype.tokencheckRole = function () {
        var token = localStorage.getItem('token');
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        var decodedToken = helper.decodeToken(token);
        return decodedToken.sub;
    };
    AuthServiceService.prototype.tokencheckId = function () {
        var token = localStorage.getItem('token');
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        var decodedToken = helper.decodeToken(token);
        return decodedToken.nameid;
    };
    AuthServiceService.prototype.tokenGetName = function () {
        var token = localStorage.getItem('token');
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        var decodedToken = helper.decodeToken(token);
        //console.log(decodedToken);
        return decodedToken.unique_name;
    };
    AuthServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ShareData_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthServiceService);
    return AuthServiceService;
}());



/***/ }),

/***/ "./src/app/ShareData/repository.service.ts":
/*!*************************************************!*\
  !*** ./src/app/ShareData/repository.service.ts ***!
  \*************************************************/
/*! exports provided: RepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryService", function() { return RepositoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepositoryService = /** @class */ (function () {
    function RepositoryService(http) {
        this.http = http;
        this.urlAddress = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].employee_url;
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].imageUrl;
    }
    RepositoryService.prototype.getData = function (route) {
        return this.http.get(this.createCompleteRoute(route, this.urlAddress), this.generateHeaders());
    };
    RepositoryService.prototype.getUserData = function (route) {
        return this.http.get(this.createUserCompleteRoute(route, this.urlAddress), this.generateHeaders());
    };
    RepositoryService.prototype.postData = function (route, body) {
        return this.http.post(this.createCompleteRoute(route, this.urlAddress), body, this.generateHeaders());
    };
    RepositoryService.prototype.postUserData = function (route, body) {
        return this.http.post(this.createUserCompleteRoute(route, this.urlAddress), body, this.generateHeaders());
    };
    RepositoryService.prototype.postFile = function (route, body) {
        return this.http.post(this.createCompleteRoutefile(route, this.urlAddress), body, this.generateHeadersfile());
    };
    RepositoryService.prototype.isUserIdUnique = function (userId) {
        return this.http.post(this.createCompleteRoute('isuniqueemail', this.urlAddress), 'c@g.com', this.generateHeaders());
    };
    RepositoryService.prototype.deleteUser = function (route, body) {
        return this.http.post(this.createCompleteRoute(route, this.urlAddress), body, this.generateHeaders());
    };
    RepositoryService.prototype.createCompleteRoute = function (route, envAddress) {
        return envAddress + "/file/" + route;
    };
    RepositoryService.prototype.createCompleteRoutefile = function (route, envAddress) {
        return envAddress + "/file/" + route;
    };
    RepositoryService.prototype.createUserCompleteRoute = function (route, envAddress) {
        return envAddress + "/employee/" + route;
    };
    RepositoryService.prototype.generateHeaders = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem('token')
            })
        };
    };
    RepositoryService.prototype.generateHeadersfile = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'bearer ' + localStorage.getItem('token'),
                'enctype': 'multipart/form-data'
            })
        };
    };
    RepositoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RepositoryService);
    return RepositoryService;
}());



/***/ }),

/***/ "./src/app/SharePart/main-nav-bar/main-nav-bar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/SharePart/main-nav-bar/main-nav-bar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbarimage{\r\n    height: 40px;\r\n    width: 80px;\r\n}"

/***/ }),

/***/ "./src/app/SharePart/main-nav-bar/main-nav-bar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/SharePart/main-nav-bar/main-nav-bar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/view/side/travel\"><img src=\"assets/back.jpeg\" id=\"navbarimage\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n      \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/view/addview\" routerLinkActive=\"active \">Add View</a>\n      </li>\n      \n        <li *ngIf=\"isAdmin\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/view/admin\" routerLinkActive=\"active \">Admin</a>\n        </li>\n        <li *ngIf=\"isUser\"  class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/view/admin\" routerLinkActive=\"active \">User</a>\n        </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/view/side/travel\" routerLinkActive=\"active \">travel page</a>\n      </li>\n      \n    </ul>\n     <li class=\"nav-item dropdown\" *ngIf=\"islogged\" >\n      <button class=\"nav-link dropdown-toggle btn btn-outline-secondary\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n       {{UserName}}\n      </button>\n      <div  class=\"dropdown-menu bg-dark text-light\" aria-labelledby=\"navbarDropdownMenuLink\">\n        <a class=\"dropdown-item text-light\" (click)=\"logout()\" href=\"#\">Log Out</a>\n        \n      </div>\n      \n    </li>\n    <li class=\"nav-item dropdown\" *ngIf=\"!(islogged)\" >\n      <a class=\"nav-link\" routerLink=\"/user/login\" routerLinkActive=\"active \">Sign Up</a>\n     \n    </li>\n    <span class=\"navbar-text\">\n   </span>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/SharePart/main-nav-bar/main-nav-bar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/SharePart/main-nav-bar/main-nav-bar.component.ts ***!
  \******************************************************************/
/*! exports provided: MainNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavBarComponent", function() { return MainNavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _AuthGuard_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../AuthGuard/auth-service.service */ "./src/app/AuthGuard/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainNavBarComponent = /** @class */ (function () {
    function MainNavBarComponent(auth) {
        this.auth = auth;
    }
    MainNavBarComponent.prototype.ngOnInit = function () {
        this.islogged = this.auth.islogged();
        this.isAdmin = this.auth.isAdmin();
        this.isUser = this.auth.isUser();
        this.UserName = this.auth.tokenGetName();
    };
    MainNavBarComponent.prototype.logout = function () {
        this.auth.loggout();
    };
    MainNavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav-bar',
            template: __webpack_require__(/*! ./main-nav-bar.component.html */ "./src/app/SharePart/main-nav-bar/main-nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./main-nav-bar.component.css */ "./src/app/SharePart/main-nav-bar/main-nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_AuthGuard_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]])
    ], MainNavBarComponent);
    return MainNavBarComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    \n  </h1>\n  <app-main-nav-bar></app-main-nav-bar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _SharePart_main_nav_bar_main_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SharePart/main-nav-bar/main-nav-bar.component */ "./src/app/SharePart/main-nav-bar/main-nav-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'user/login', pathMatch: 'full' },
    { path: 'view', loadChildren: "./view-pages/view-pages.module#ViewPagesModule" },
    { path: 'user', loadChildren: "./user-page/user-page.module#UserPageModule" },
    { path: 'login', component: _SharePart_main_nav_bar_main_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["MainNavBarComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _SharePart_main_nav_bar_main_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["MainNavBarComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    employee_url: "http://localhost:5308/api",
    imageUrl: "http://localhost:5308/"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\softawre project\webcode\Trip\Traveling\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map