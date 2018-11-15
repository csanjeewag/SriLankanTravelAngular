(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-pages-view-pages-module"],{

/***/ "./src/app/AuthGuard/auth-gurad.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/AuthGuard/auth-gurad.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuradGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuradGuard", function() { return AuthGuradGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/AuthGuard/auth-service.service.ts");
/* harmony import */ var _ShareData_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../ShareData/repository.service */ "./src/app/ShareData/repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuradGuard = /** @class */ (function () {
    function AuthGuradGuard(auth, repository) {
        this.auth = auth;
        this.repository = repository;
    }
    AuthGuradGuard.prototype.canActivate = function (next, state) {
        var expectedRole1 = next.data.expectedRole1;
        var expectedRole2 = next.data.expectedRole2;
        var expectedRole3 = next.data.expectedRole3;
        if ((this.auth.tokencheckRole() === expectedRole1) || (this.auth.tokencheckRole() === expectedRole2) || (this.auth.tokencheckRole() === expectedRole3)) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuradGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"], _ShareData_repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"]])
    ], AuthGuradGuard);
    return AuthGuradGuard;
}());



/***/ }),

/***/ "./src/app/view-pages/add-view/add-view.component.css":
/*!************************************************************!*\
  !*** ./src/app/view-pages/add-view/add-view.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#msg{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/view-pages/add-view/add-view.component.html":
/*!*************************************************************!*\
  !*** ./src/app/view-pages/add-view/add-view.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-row\">\n    <div class=\"form-group col-md-10 container\">\n            <div class=\"card\">\n                    <h5 class=\"card-header\"><h2> Create a new View</h2></h5>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"> <h3 id=\"msg\">{{Message}}</h3></h5>\n                      <form [formGroup]=\"pageForm\" autocomplete=\"off\" novalidate (ngSubmit)=\"createpage(pageForm.value)\">\n                            <div class=\"form-group col-md-10 container\">\n                                    <div class=\"form-group\">\n                                            <label for=\"email\" class=\"sr-only\">DepartmentId</label>\n                                            <input class=\"form-control\" formControlName=\"id\" id=\"id\" placeholder=\"Topic Id\">\n                                            <em *ngIf=\"validateControl('id') && hasError('id', 'required')\">*Id is required!</em>\n                                            \n                                        </div> \n                            </div>\n\n                            <div class=\"form-group col-md-10 container\">\n                                    <div class=\"form-group\">\n                                            <label for=\"key\" class=\"sr-only\">Name</label>\n                                            <input type=\"text\" formControlName=\"topic\" id=\"topic\" class=\"form-control\" placeholder=\"Topic Name\">\n                                            <em *ngIf=\"validateControl('topic') && hasError('topic', 'required')\">*Topic Name is required</em>\n                                           \n                                        </div>\n                            </div>\n                            \n                            <div class=\"form-group col-md-10 container\">\n                                    <div class=\"form-group\">\n                                            <label for=\"key\" class=\"sr-only\">Name</label>\n                                            <input type=\"text\" formControlName=\"subtopic\" id=\"subtopic\" class=\"form-control\" placeholder=\"Sub Topic Name\">\n                                            <em *ngIf=\"validateControl('subtopic') && hasError('subtopic', 'required')\">*Sub Topic is required</em>\n                                           \n                                        </div>\n                            </div>\n\n                            <div class=\"form-group col-md-10 container\">\n                                    <div class=\"form-group\">\n                                            <label for=\"key\" class=\"sr-only\">Type</label>\n                                            <input type=\"text\" formControlName=\"type\" id=\"type\" class=\"form-control\" placeholder=\"Type\">\n                                            <em *ngIf=\"validateControl('type') && hasError('type', 'required')\">*type is required</em>\n                                           \n                                        </div>\n                            </div>\n\n                            <div class=\"form-group col-md-10 container\">\n                                    <div class=\"form-row\">\n                                            <div class=\"form-group col-md-8\">\n                                                      \n                                                    <label for=\"comment\"><b>Discription 1:</b></label>\n                                                    <!-- <input rows=\"4\" cols=\"50\" type=\"text\" formControlName=\"dis1\" id=\"dis1\" class=\"form-control\" placeholder=\"Discription 1 \"> -->\n                                                    <textarea  class=\"form-control\" rows=\"10\" id=\"comment\"formControlName=\"dis1\" placeholder=\"Discription 1 \" > </textarea>\n                                                    <em *ngIf=\"validateControl('dis1') && hasError('dis1', 'required')\">*Discription is required</em>\n                                                   \n                                                          \n                                                  </div>\n                                                  <div class=\"form-group col-md-4\">\n                                                        <input formControlName=\"image\" type=\"file\" (change)=\"onFileChange($event.target.files,0)\"/>\n                                                           <img *ngIf=\"ImageUrl[0]\" [src]=\"ImageUrl[0]\" style=\"width:250px; height:200px\"> \n                                                           <em *ngIf=\"validateControl('image') && hasError('image', 'required')\">*Insert image</em>\n                                                   \n                                                  </div>\n                                     </div>  \n                            </div>\n\n                            \n                               \n                           \n                            <div class=\"form-group col-md-10 container\">\n                                    <div class=\"form-row\">\n                                            <div class=\"form-group col-md-8\">\n                                                      \n                                                    <label for=\"comment\"><b>Discription 2:</b></label>\n                                                    <!-- <input rows=\"4\" cols=\"50\" type=\"text\" formControlName=\"dis1\" id=\"dis1\" class=\"form-control\" placeholder=\"Discription 1 \"> -->\n                                                    <textarea  class=\"form-control\" rows=\"10\" id=\"comment\"formControlName=\"dis2\" placeholder=\"Discription 2 \" > </textarea>\n                                                    <em *ngIf=\"validateControl('dis2') && hasError('dis2', 'required')\">*password is required</em>\n                                                    <em *ngIf=\"validateControl('dis2') && hasError('dis2', 'maxlength')\">*Maximum allowed length is 100 characters.</em>\n                                                     \n                                                          \n                                                  </div>\n                                                  <div class=\"form-group col-md-4\">\n                                                        <input type=\"file\" (change)=\"onFileChange($event.target.files,1)\"/>\n                                                           <img *ngIf=\"ImageUrl[1]\" [src]=\"ImageUrl[1]\" style=\"width:250px; height:200px\"> \n                                                  </div>\n                                     </div>  \n                            </div>\n\n                            <div class=\"form-group col-md-10 container\">\n                                    <div class=\"form-row\">\n                                            <div class=\"form-group col-md-8\">\n                                                      \n                                                    <label for=\"comment\"><b>Discription 3:</b></label>\n                                                    <!-- <input rows=\"4\" cols=\"50\" type=\"text\" formControlName=\"dis1\" id=\"dis1\" class=\"form-control\" placeholder=\"Discription 1 \"> -->\n                                                    <textarea  class=\"form-control\" rows=\"10\" id=\"comment\"formControlName=\"dis3\" placeholder=\"Discription 3 \" > </textarea>\n                                                    <em *ngIf=\"validateControl('dis3') && hasError('dis3', 'required')\">*password is required</em>\n                                                    <em *ngIf=\"validateControl('dis3') && hasError('dis3', 'maxlength')\">*Maximum allowed length is 100 characters.</em>\n                                                     \n                                                          \n                                                  </div>\n                                                  <div class=\"form-group col-md-4\" >\n                                                        <input type=\"file\" (change)=\"onFileChange($event.target.files,2)\" />\n                                                           <img *ngIf=\"ImageUrl[2]\" [src]=\"ImageUrl[2]\" style=\"width:250px; height:200px\"> \n                                                  </div>\n                                     </div>  \n                            </div>\n\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"redirect()\">Cancel</button>\n                                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!pageForm.valid\">Create New page</button>\n                                    \n                                </div> \n                        </form>\n      \n                    </div>\n                  </div>\n    </div>\n</div>\n<!-- <div class=\"card\">\n    <h5 class=\"card-header\"><h2> Create a new View</h2></h5>\n    <div class=\"card-body\">\n        <h5 class=\"card-title\"> <h3 id=\"msg\">{{Message}}</h3></h5>\n      <form [formGroup]=\"pageForm\" autocomplete=\"off\" novalidate (ngSubmit)=\"createpage(pageForm.value)\">\n            <div class=\"form-group\">\n                <label for=\"email\" class=\"sr-only\">DepartmentId</label>\n                <input class=\"form-control\" formControlName=\"id\" id=\"id\" placeholder=\"Topic Id\">\n                <em *ngIf=\"validateControl('id') && hasError('id', 'required')\">*Email is required!</em>\n                <em *ngIf=\"validateControl('id') && hasError('id', 'email')\">*This not a valid email!</em>\n        \n            </div>\n            <div class=\"form-group\">\n                <label for=\"key\" class=\"sr-only\">Name</label>\n                <input type=\"text\" formControlName=\"topic\" id=\"topic\" class=\"form-control\" placeholder=\"Topic Name\">\n                <em *ngIf=\"validateControl('topic') && hasError('topic', 'required')\">*password is required</em>\n                <em *ngIf=\"validateControl('topic') && hasError('topic', 'maxlength')\">*Maximum allowed length is 100 characters.</em>\n              \n            </div>\n            <div class=\"form-group\">\n                <label for=\"key\" class=\"sr-only\">Dis1</label>\n                <input type=\"text\" formControlName=\"type\" id=\"type\" class=\"form-control\" placeholder=\"Type\">\n                <em *ngIf=\"validateControl('type') && hasError('type', 'required')\">*password is required</em>\n                <em *ngIf=\"validateControl('type') && hasError('type', 'maxlength')\">*Maximum allowed length is 100 characters.</em>\n              \n            </div>\n            <div class=\"form-group\">\n                <label for=\"key\" class=\"sr-only\">Dis1</label>\n                <input type=\"text\" formControlName=\"dis\" id=\"dis\" class=\"form-control\" placeholder=\"Dis 1 \">\n                <em *ngIf=\"validateControl('dis') && hasError('dis', 'required')\">*password is required</em>\n                <em *ngIf=\"validateControl('dis') && hasError('dis', 'maxlength')\">*Maximum allowed length is 100 characters.</em>\n              \n            </div>\n            <div class=\"form-group\">\n                <label for=\"key\" class=\"sr-only\">Dis1</label>\n                <input type=\"file\" (change)=\"onFileChange($event.target.files)\"/>\n                \n            </div>\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"redirectToOwnerList()\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!pageForm.valid\">Create</button>\n            \n        </div> \n        \n        \n        </form>\n      \n    </div>\n  </div>\n  \n  <img [src]=\"ImageUrl\" style=\"width:250px;height:200px\">\n -->\n"

/***/ }),

/***/ "./src/app/view-pages/add-view/add-view.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/view-pages/add-view/add-view.component.ts ***!
  \***********************************************************/
/*! exports provided: AddViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddViewComponent", function() { return AddViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ShareData_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../ShareData/repository.service */ "./src/app/ShareData/repository.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _AuthGuard_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../AuthGuard/auth-service.service */ "./src/app/AuthGuard/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddViewComponent = /** @class */ (function () {
    function AddViewComponent(auth, router, route, repository, fb) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.repository = repository;
        this.fb = fb;
        this.ImageUrl = [];
        this.FileImage = [];
    }
    AddViewComponent.prototype.ngOnInit = function () {
        this.Author = this.auth.tokencheckId();
        this.pageForm = this.fb.group({
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            topic: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subtopic: [null],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dis1: [null],
            dis2: [null],
            dis3: [null],
            image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.formGroup = this.fb.group({
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    AddViewComponent.prototype.validateControl = function (controlName) {
        if (this.pageForm.controls[controlName].invalid && this.pageForm.controls[controlName].touched)
            return true;
        return false;
    };
    AddViewComponent.prototype.hasError = function (controlName, errorName) {
        if (this.pageForm.controls[controlName].hasError(errorName))
            return true;
        return false;
    };
    AddViewComponent.prototype.createpage = function (pageFormvalue) {
        var _this = this;
        if (this.pageForm.valid) {
            var formData = new FormData();
            formData.append('Id', pageFormvalue.id);
            formData.append('Topic', pageFormvalue.topic);
            formData.append('SubTopic', pageFormvalue.subtopic);
            formData.append('Author', this.Author);
            formData.append('Type', pageFormvalue.type);
            formData.append('Dis1', pageFormvalue.dis1);
            formData.append('Dis2', pageFormvalue.dis2);
            formData.append('Dis3', pageFormvalue.dis3);
            formData.append('DefImage', this.FileImage[0]);
            formData.append('Image', this.FileImage[1]);
            formData.append('Image', this.FileImage[2]);
            console.log(formData.get('Id'));
            var apiUrl = 'test';
            this.repository.postFile(apiUrl, formData)
                .subscribe(function (res) {
                _this.router.navigate(['view/side/travel']);
            }, (function (error) {
                _this.Message = "Adding Page Failed!";
            }));
        }
    };
    AddViewComponent.prototype.onFileChange = function (file, id) {
        var _this = this;
        this.FileImage[id] = file.item(0);
        //selected image viewing
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.ImageUrl[id] = event.target.result;
            console.log(event.target.result);
        };
        reader.readAsDataURL(this.FileImage[id]);
    };
    AddViewComponent.prototype.redirect = function () {
        this.router.navigate(['view/side/travel']);
    };
    AddViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-view',
            template: __webpack_require__(/*! ./add-view.component.html */ "./src/app/view-pages/add-view/add-view.component.html"),
            styles: [__webpack_require__(/*! ./add-view.component.css */ "./src/app/view-pages/add-view/add-view.component.css")]
        }),
        __metadata("design:paramtypes", [_AuthGuard_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ShareData_repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddViewComponent);
    return AddViewComponent;
}());



/***/ }),

/***/ "./src/app/view-pages/all-images/all-images.component.css":
/*!****************************************************************!*\
  !*** ./src/app/view-pages/all-images/all-images.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headerImage{\r\n    height: 150px;\r\n    z-index: -1;\r\n}\r\n#pageImage{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view-pages/all-images/all-images.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/view-pages/all-images/all-images.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"form-row\">\n  <div class=\"form-group col-md-10 container\">\n          <div class=\"card\">\n                  <h5 class=\"card-header\"><h2>Sri Lankan Travelling</h2>   <img class=\"card-img-top\" src=\"assets/back.jpeg\" alt=\"Cinque Terre\" id=\"headerImage\"> </h5>\n                  <div class=\"card-body\">\n                      <h5 class=\"card-title\"></h5>\n                      <div class=\"form-row\">\n      \n\n                          <div class=\"form-group col-md-3\" *ngFor=\"let p of Images; index as i;\">\n                             <div class=\"card\">\n                              <h5 class=\"card-header\"> <img  class=\"card-img-top\" [src]=\"imageUrl+p.imageId\" alt=\"Cinque Terre\" id=\"pageImage\">\n                                \n                              </h5>\n                              <div class=\"card-body\">\n                                  <h5 class=\"card-title\"> </h5>\n                                  <div *ngIf=\"(p.isActive)\"><button type=\"button\" id=\"update\" class=\"btn  btn-danger\" (click)=DeActivePage(p.imageId)>Deactive</button></div>\n                                  <div *ngIf=\"!(p.isActive)\"><button type=\"button\" id=\"update\" class=\"btn  btn-success\" (click)=ActivePage(p.imageId)>Active</button></div>\n                                \n                              </div>\n                            </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n          </div>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/view-pages/all-images/all-images.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view-pages/all-images/all-images.component.ts ***!
  \***************************************************************/
/*! exports provided: AllImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllImagesComponent", function() { return AllImagesComponent; });
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




var AllImagesComponent = /** @class */ (function () {
    function AllImagesComponent(route, router, repository) {
        this.route = route;
        this.router = router;
        this.repository = repository;
        this.imageUrl = this.repository.imageUrl;
    }
    AllImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this.getimages(id);
        });
    };
    AllImagesComponent.prototype.getimages = function (id) {
        var _this = this;
        this.repository.getData('allgetimage/' + id)
            .subscribe(function (res) {
            _this.Images = res;
        }, function (error) {
        });
    };
    AllImagesComponent.prototype.DeActivePage = function (id) {
        var apiUrl = 'deactiveimage';
        var formData = new FormData();
        formData.append('Id', id);
        this.repository.postFile(apiUrl, formData)
            .subscribe(function (res) {
            location.reload();
        }, (function (error) {
            // this.Message="role Created Failed,Try Again!";
        }));
    };
    AllImagesComponent.prototype.ActivePage = function (id) {
        var apiUrl = 'activeimage';
        var formData = new FormData();
        formData.append('Id', id);
        this.repository.postFile(apiUrl, formData)
            .subscribe(function (res) {
            location.reload();
        }, (function (error) {
            // this.Message="role Created Failed,Try Again!";
        }));
    };
    AllImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-images',
            template: __webpack_require__(/*! ./all-images.component.html */ "./src/app/view-pages/all-images/all-images.component.html"),
            styles: [__webpack_require__(/*! ./all-images.component.css */ "./src/app/view-pages/all-images/all-images.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ShareData_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]])
    ], AllImagesComponent);
    return AllImagesComponent;
}());



/***/ }),

/***/ "./src/app/view-pages/all-pages/all-pages.component.css":
/*!**************************************************************!*\
  !*** ./src/app/view-pages/all-pages/all-pages.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headerImage{\r\n    height: 150px;\r\n    z-index: -1;\r\n}\r\n#pageImage{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view-pages/all-pages/all-pages.component.html":
/*!***************************************************************!*\
  !*** ./src/app/view-pages/all-pages/all-pages.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"form-row\">\n    <div class=\"form-group col-md-10\">\n            <div class=\"card\">\n                    <h5 class=\"card-header\"><h2>Sri Lankan Travelling</h2>   <img class=\"card-img-top\" src=\"assets/back.jpeg\" alt=\"Cinque Terre\" id=\"headerImage\"> </h5>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"></h5>\n                        <div class=\"form-row\">\n        \n\n                            <div class=\"form-group col-md-3\" *ngFor=\"let p of pages; index as i;\">\n                               <div class=\"card\">\n                                <h5 class=\"card-header\"><h3>{{p.topic}}</h3>   <img  class=\"card-img-top\" [src]=\"imageUrl+p.imageId\" alt=\"Cinque Terre\" id=\"pageImage\" (click)=gotopage(p.id)>{{p.subTopic}}\n\n                                </h5>\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\"> </h5>\n                                 \n                                </div>\n                              </div>\n                              </div>\n                          </div>\n  \n                      </div>\n  \n            </div>\n    </div>\n  </div>\n  \n\n\n\n\n"

/***/ }),

/***/ "./src/app/view-pages/all-pages/all-pages.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-pages/all-pages/all-pages.component.ts ***!
  \*************************************************************/
/*! exports provided: AllPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPagesComponent", function() { return AllPagesComponent; });
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





var AllPagesComponent = /** @class */ (function () {
    function AllPagesComponent(route, router, repository, fb) {
        this.route = route;
        this.router = router;
        this.repository = repository;
        this.fb = fb;
        this.imageUrl = this.repository.imageUrl;
    }
    AllPagesComponent.prototype.ngOnInit = function () {
        this.getpages();
    };
    AllPagesComponent.prototype.getpages = function () {
        var _this = this;
        this.repository.getData('gettopicid')
            .subscribe(function (res) {
            _this.pages = res;
        }, function (error) {
        });
    };
    AllPagesComponent.prototype.gotopage = function (id) {
        this.router.navigate(['view/side/travel/' + id]);
    };
    AllPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-pages',
            template: __webpack_require__(/*! ./all-pages.component.html */ "./src/app/view-pages/all-pages/all-pages.component.html"),
            styles: [__webpack_require__(/*! ./all-pages.component.css */ "./src/app/view-pages/all-pages/all-pages.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ShareData_repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AllPagesComponent);
    return AllPagesComponent;
}());



/***/ }),

/***/ "./src/app/view-pages/pages-state/pages-state.component.css":
/*!******************************************************************!*\
  !*** ./src/app/view-pages/pages-state/pages-state.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pageImage{\r\n    height: 50px;\r\n    width: 100px;;\r\n}\r\n#headerImage{\r\n    height: 150px;\r\n    z-index: -1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/view-pages/pages-state/pages-state.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/view-pages/pages-state/pages-state.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"form-row\">\n  <div class=\"form-group col-md-10 container\">\n          <div class=\"card\">\n                  <h5 class=\"card-header\"><h2>Sri Lankan Travelling</h2>   <img class=\"card-img-top\" src=\"assets/back.jpeg\" alt=\"Cinque Terre\" id=\"headerImage\"></h5>\n                 \n<table class=\"table table-hover\">\n  <thead>\n  <tr >\n      <th>ID</th>\n    <th>Topic</th>\n    <th>Sub Topic</th>\n    <th>State</th>\n    <th>View Page</th>\n    <th> Update</th>\n    <th>Active/Deactive</th>\n    <th >All Images </th>\n   \n  </tr></thead>\n  <tbody>\n  <tr *ngFor=\"let p of pages\" >\n    <td>{{p.id}}</td>\n    <td>{{p.topic}}</td>\n    <td>{{p.subTopic}}</td>\n    <td>{{p.isActive}}</td>\n    <td (click)=gotopage(p.id)><img  class=\"card-img-top\" [src]=\"imageUrl+p.imageId\" alt=\"Cinque Terre\" id=\"pageImage\" (click)=gotopage(p.id)></td>\n    \n\n    <td><button type=\"button\" id=\"details\" class=\"btn  btn-default\" (click)=updatepage(p.id)>Update</button></td>\n    \n          <td *ngIf=\"(p.isActive)\"><button type=\"button\" id=\"update\" class=\"btn  btn-danger\" (click)=DeActivePage(p.id)>Deactive</button></td>\n          <td *ngIf=\"!(p.isActive)\"><button type=\"button\" id=\"update\" class=\"btn  btn-success\" (click)=ActivePage(p.id)>Active</button></td>\n          <td ><button type=\"button\" id=\"update\" class=\"btn  btn-success\" (click)=AllImage(p.id)>All Images</button></td>\n          \n   \n  </tr>\n  </tbody>\n</table>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/view-pages/pages-state/pages-state.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view-pages/pages-state/pages-state.component.ts ***!
  \*****************************************************************/
/*! exports provided: PagesStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesStateComponent", function() { return PagesStateComponent; });
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




var PagesStateComponent = /** @class */ (function () {
    function PagesStateComponent(repository, route, router) {
        this.repository = repository;
        this.route = route;
        this.router = router;
        this.imageUrl = "http://localhost:5308/";
    }
    PagesStateComponent.prototype.ngOnInit = function () {
        this.getpage();
    };
    PagesStateComponent.prototype.getpage = function () {
        var _this = this;
        this.repository.getData('getallpages')
            .subscribe(function (res) {
            _this.pages = res;
        }, function (error) {
        });
    };
    PagesStateComponent.prototype.gotopage = function (id) {
        this.router.navigate(['view/side/travel/' + id]);
    };
    PagesStateComponent.prototype.updatepage = function (id) {
        this.router.navigate(['view/updateview/' + id]);
    };
    PagesStateComponent.prototype.AllImage = function (id) {
        this.router.navigate(['view/allimage/' + id]);
    };
    PagesStateComponent.prototype.DeActivePage = function (id) {
        this.repository.getData('deactivepage/' + id)
            .subscribe(function (res) {
            //this.router.navigate(['view/side/travel/']);
            location.reload();
        }, function (error) {
        });
    };
    PagesStateComponent.prototype.ActivePage = function (id) {
        this.repository.getData('activepage/' + id)
            .subscribe(function (res) {
            // this.router.navigate(['view/side/travel/'+id]);
            location.reload();
        }, function (error) {
        });
    };
    PagesStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages-state',
            template: __webpack_require__(/*! ./pages-state.component.html */ "./src/app/view-pages/pages-state/pages-state.component.html"),
            styles: [__webpack_require__(/*! ./pages-state.component.css */ "./src/app/view-pages/pages-state/pages-state.component.css")]
        }),
        __metadata("design:paramtypes", [_ShareData_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PagesStateComponent);
    return PagesStateComponent;
}());



/***/ }),

/***/ "./src/app/view-pages/side-bar/side-bar.component.css":
/*!************************************************************!*\
  !*** ./src/app/view-pages/side-bar/side-bar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n    height: 100%;\r\n    \r\n    left: 0;\r\n    background-color: rgb(68, 70, 77);\r\n    overflow-x: show;\r\n    \r\n}\r\n\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    text-align: left;\r\n    color: #0f0f0f;\r\n    display: block;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/view-pages/side-bar/side-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/view-pages/side-bar/side-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"form-row\">\n  <div class=\"form-group col-md-2\">\n        <div class=\"sidenav\" >\n                <br><br>\n            <div *ngFor=\"let p of pages\">\n                    <a (click)=gotopage(p.id)>{{p.topic}}</a>\n            </div>\n                \n               \n              </div>\n              \n  </div>\n  \n  <div class=\"form-group col-md-10\">\n      <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/view-pages/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/view-pages/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
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





var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(route, router, repository, fb) {
        this.route = route;
        this.router = router;
        this.repository = repository;
        this.fb = fb;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.Id = params.get("id");
        });
        this.getpages();
    };
    SideBarComponent.prototype.getpages = function () {
        var _this = this;
        this.repository.getData('getpagestopic')
            .subscribe(function (res) {
            _this.pages = res;
        }, function (error) {
        });
    };
    SideBarComponent.prototype.gotopage = function (id) {
        this.router.navigate(['view/side/travel/' + id]);
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/view-pages/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/view-pages/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ShareData_repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/view-pages/update-page/update-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/view-pages/update-page/update-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#msg{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/view-pages/update-page/update-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/view-pages/update-page/update-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-row\">\n        <div class=\"form-group col-md-10 container\">\n                <div class=\"card\">\n                        <h5 class=\"card-header\"><h2> Update  View</h2></h5>\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\"> <h3 id=\"msg\">{{Message}}</h3></h5>\n                          <form [formGroup]=\"pageForm\" autocomplete=\"off\" novalidate (ngSubmit)=\"createpage(pageForm.value)\">\n                                <div class=\"form-group col-md-10 container\">\n                                        <div class=\"form-group\">\n                                                <label for=\"email\" class=\"sr-only\">DepartmentId</label>\n                                                <input class=\"form-control\" formControlName=\"id\" id=\"id\" placeholder=\"Topic Id\">\n                                                <em *ngIf=\"validateControl('id') && hasError('id', 'required')\">*Topic is required!</em>\n                                                \n                                            </div> \n                                </div>\n    \n                                <div class=\"form-group col-md-10 container\">\n                                        <div class=\"form-group\">\n                                                <label for=\"key\" class=\"sr-only\">Name</label>\n                                                <input type=\"text\" formControlName=\"topic\" id=\"topic\" class=\"form-control\" placeholder=\"Topic Name\">\n                                                <em *ngIf=\"validateControl('topic') && hasError('topic', 'required')\">*Topic Name is required</em>\n                                               \n                                            </div>\n                                </div>\n                                \n                                <div class=\"form-group col-md-10 container\">\n                                        <div class=\"form-group\">\n                                                <label for=\"key\" class=\"sr-only\">Name</label>\n                                                <input type=\"text\" formControlName=\"subtopic\" id=\"subtopic\" class=\"form-control\" placeholder=\"Sub Topic Name\">\n                                                <em *ngIf=\"validateControl('subtopic') && hasError('subtopic', 'required')\">*Sub Topic is required</em>\n                                               \n                                            </div>\n                                </div>\n    \n                                <div class=\"form-group col-md-10 container\">\n                                        <div class=\"form-group\">\n                                                <label for=\"key\" class=\"sr-only\">Type</label>\n                                                <input type=\"text\" formControlName=\"type\" id=\"type\" class=\"form-control\" placeholder=\"Type\">\n                                                <em *ngIf=\"validateControl('type') && hasError('type', 'required')\">*Type is required</em>\n                                                \n                                            </div>\n                                </div>\n    \n                                <div class=\"form-group col-md-10 container\">\n                                        <div class=\"form-row\">\n                                                <div class=\"form-group col-md-8\">\n                                                          \n                                                        <label for=\"comment\"><b>Discription 1:</b></label>\n                                                        <!-- <input rows=\"4\" cols=\"50\" type=\"text\" formControlName=\"dis1\" id=\"dis1\" class=\"form-control\" placeholder=\"Discription 1 \"> -->\n                                                        <textarea  class=\"form-control\" rows=\"10\" id=\"comment\" formControlName=\"dis1\" placeholder=\"Discription 1 \" > </textarea>\n                                                        <em *ngIf=\"validateControl('dis1') && hasError('dis1', 'required')\">*password is required</em>\n                                                        <em *ngIf=\"validateControl('dis1') && hasError('dis1', 'maxlength')\">*Maximum allowed length is 100 characters.</em>\n                                                         \n                                                              \n                                                      </div>\n                                                      <div class=\"form-group col-md-4\">\n                                                                <label for=\"I1\"><b>Change Main Image:</b></label>\n                                                            <input formControlName=\"image\" id=\"I1\" type=\"file\" (change)=\"onFileChange($event.target.files,0)\"/>\n                                                               <img *ngIf=\"ImageUrl[0]\" [src]=\"ImageUrl[0]\" style=\"width:250px; height:200px\"> \n                                                      </div>\n                                         </div>  \n                                </div>\n    \n                                \n                                   \n                               \n                                <div class=\"form-group col-md-10 container\">\n                                        <div class=\"form-row\">\n                                                <div class=\"form-group col-md-8\">\n                                                          \n                                                        <label for=\"comment\"><b>Discription 2:</b></label>\n                                                        <!-- <input rows=\"4\" cols=\"50\" type=\"text\" formControlName=\"dis1\" id=\"dis1\" class=\"form-control\" placeholder=\"Discription 1 \"> -->\n                                                        <textarea  class=\"form-control\" rows=\"10\" id=\"comment\"formControlName=\"dis2\" placeholder=\"Discription 2 \" > </textarea>\n                                                        <em *ngIf=\"validateControl('dis2') && hasError('dis2', 'required')\">*password is required</em>\n                                                        <em *ngIf=\"validateControl('dis2') && hasError('dis2', 'maxlength')\">*Maximum allowed length is 100 characters.</em>\n                                                         \n                                                              \n                                                      </div>\n                                                      <div class=\"form-group col-md-4\">\n                                                        <label for=\"I2\"><b>Add new Image:</b></label>\n                                                            <input id=\"I2\" type=\"file\" (change)=\"onFileChange($event.target.files,1)\"/>\n                                                               <img *ngIf=\"ImageUrl[1]\" [src]=\"ImageUrl[1]\" style=\"width:250px; height:200px\"> \n                                                      </div>\n                                         </div>  \n                                </div>\n    \n                                <div class=\"form-group col-md-10 container\">\n                                        <div class=\"form-row\">\n                                                <div class=\"form-group col-md-8\">\n                                                          \n                                                        <label for=\"comment\"><b>Discription 3:</b></label>\n                                                        <!-- <input rows=\"4\" cols=\"50\" type=\"text\" formControlName=\"dis1\" id=\"dis1\" class=\"form-control\" placeholder=\"Discription 1 \"> -->\n                                                        <textarea  class=\"form-control\" rows=\"10\" id=\"comment\"formControlName=\"dis3\" placeholder=\"Discription 3 \" > </textarea>\n                                                        <em *ngIf=\"validateControl('dis3') && hasError('dis3', 'required')\">*password is required</em>\n                                                        <em *ngIf=\"validateControl('dis3') && hasError('dis3', 'maxlength')\">*Maximum allowed length is 100 characters.</em>\n                                                         \n                                                              \n                                                      </div>\n                                                      <div class=\"form-group col-md-4\" >\n                                                                <label for=\"I3\"><b>Add new Image:</b></label>\n                                                            <input id=\"I3\" type=\"file\" (change)=\"onFileChange($event.target.files,2)\" />\n                                                               <img *ngIf=\"ImageUrl[2]\" [src]=\"ImageUrl[2]\" style=\"width:250px; height:200px\"> \n                                                      </div>\n                                         </div>  \n                                </div>\n    \n                                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"redirect()\">Cancel</button>\n                                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!pageForm.valid\">Update</button>\n                                        \n                                    </div> \n                            </form>\n          \n                        </div>\n                      </div>\n        </div>\n    </div>\n "

/***/ }),

/***/ "./src/app/view-pages/update-page/update-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view-pages/update-page/update-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdatePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageComponent", function() { return UpdatePageComponent; });
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





var UpdatePageComponent = /** @class */ (function () {
    function UpdatePageComponent(repository, fb, route, router) {
        this.repository = repository;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.ImageUrl = [];
        this.FileImage = [];
        this.Id = 1;
    }
    UpdatePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this.getimages(id);
            _this.getpage(id);
        });
        this.pageForm = this.fb.group({
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            topic: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subtopic: [null],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dis1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dis2: [null],
            dis3: [null],
            image: [null]
        });
    };
    UpdatePageComponent.prototype.validateControl = function (controlName) {
        if (this.pageForm.controls[controlName].invalid && this.pageForm.controls[controlName].touched)
            return true;
        return false;
    };
    UpdatePageComponent.prototype.hasError = function (controlName, errorName) {
        if (this.pageForm.controls[controlName].hasError(errorName))
            return true;
        return false;
    };
    UpdatePageComponent.prototype.createpage = function (pageFormvalue) {
        var _this = this;
        if (this.pageForm.valid) {
            var formData = new FormData();
            formData.append('Id', pageFormvalue.id);
            formData.append('Topic', pageFormvalue.topic);
            formData.append('SubTopic', pageFormvalue.subtopic);
            formData.append('Type', pageFormvalue.type);
            formData.append('Dis1', pageFormvalue.dis1);
            formData.append('Dis2', pageFormvalue.dis2);
            formData.append('Dis3', pageFormvalue.dis3);
            if (this.FileImage[0] == null) {
                formData.append('DefImage', this.Page.defImage);
            }
            else {
                formData.append('DefImage', this.FileImage[0]);
            }
            formData.append('Image', this.FileImage[1]);
            formData.append('Image', this.FileImage[2]);
            var apiUrl = 'uploadpage';
            this.repository.postFile(apiUrl, formData)
                .subscribe(function (res) {
                _this.router.navigate(['view/side/travel']);
            }, (function (error) {
                _this.Message = "Upload Page Failed!";
            }));
        }
    };
    UpdatePageComponent.prototype.onFileChange = function (file, id) {
        var _this = this;
        this.FileImage[id] = file.item(0);
        //selected image viewing
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.ImageUrl[id] = event.target.result;
        };
        reader.readAsDataURL(this.FileImage[id]);
    };
    UpdatePageComponent.prototype.getpage = function (id) {
        var _this = this;
        this.repository.getData('getpage/' + id)
            .subscribe(function (res) {
            _this.Page = res;
            _this.updatepages();
        }, function (error) {
        });
    };
    UpdatePageComponent.prototype.getimages = function (id) {
        var _this = this;
        this.repository.getData('getimage/' + id)
            .subscribe(function (res) {
            _this.Images = res;
        }, function (error) {
        });
    };
    UpdatePageComponent.prototype.updatepages = function () {
        this.pageForm.controls['id'].setValue(this.Page.id);
        this.pageForm.controls['topic'].setValue(this.Page.topic);
        this.pageForm.controls['subtopic'].setValue(this.Page.subtopic);
        this.pageForm.controls['type'].setValue(this.Page.type);
        this.pageForm.controls['dis1'].setValue(this.Page.dis1);
        this.pageForm.controls['dis2'].setValue(this.Page.dis2);
        this.pageForm.controls['dis3'].setValue(this.Page.dis3);
        this.pageForm.controls['image'].setValue(this.Page.defImage);
    };
    UpdatePageComponent.prototype.redirect = function () {
        this.router.navigate(['view/side/travel']);
    };
    UpdatePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-page',
            template: __webpack_require__(/*! ./update-page.component.html */ "./src/app/view-pages/update-page/update-page.component.html"),
            styles: [__webpack_require__(/*! ./update-page.component.css */ "./src/app/view-pages/update-page/update-page.component.css")]
        }),
        __metadata("design:paramtypes", [_ShareData_repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UpdatePageComponent);
    return UpdatePageComponent;
}());



/***/ }),

/***/ "./src/app/view-pages/upload-page/upload-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/view-pages/upload-page/upload-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-pages/upload-page/upload-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/view-pages/upload-page/upload-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  upload-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/view-pages/upload-page/upload-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view-pages/upload-page/upload-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: UploadPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageComponent", function() { return UploadPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadPageComponent = /** @class */ (function () {
    function UploadPageComponent() {
    }
    UploadPageComponent.prototype.ngOnInit = function () {
    };
    UploadPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-page',
            template: __webpack_require__(/*! ./upload-page.component.html */ "./src/app/view-pages/upload-page/upload-page.component.html"),
            styles: [__webpack_require__(/*! ./upload-page.component.css */ "./src/app/view-pages/upload-page/upload-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadPageComponent);
    return UploadPageComponent;
}());



/***/ }),

/***/ "./src/app/view-pages/view-pages.module.ts":
/*!*************************************************!*\
  !*** ./src/app/view-pages/view-pages.module.ts ***!
  \*************************************************/
/*! exports provided: ViewPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPagesModule", function() { return ViewPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/view-pages/side-bar/side-bar.component.ts");
/* harmony import */ var _views_views_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/views.component */ "./src/app/view-pages/views/views.component.ts");
/* harmony import */ var _add_view_add_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-view/add-view.component */ "./src/app/view-pages/add-view/add-view.component.ts");
/* harmony import */ var _upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upload-page/upload-page.component */ "./src/app/view-pages/upload-page/upload-page.component.ts");
/* harmony import */ var _update_page_update_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-page/update-page.component */ "./src/app/view-pages/update-page/update-page.component.ts");
/* harmony import */ var _all_pages_all_pages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-pages/all-pages.component */ "./src/app/view-pages/all-pages/all-pages.component.ts");
/* harmony import */ var _pages_state_pages_state_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages-state/pages-state.component */ "./src/app/view-pages/pages-state/pages-state.component.ts");
/* harmony import */ var _all_images_all_images_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all-images/all-images.component */ "./src/app/view-pages/all-images/all-images.component.ts");
/* harmony import */ var _AuthGuard_auth_gurad_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../AuthGuard/auth-gurad.guard */ "./src/app/AuthGuard/auth-gurad.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ViewPagesModule = /** @class */ (function () {
    function ViewPagesModule() {
    }
    ViewPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'addview', component: _add_view_add_view_component__WEBPACK_IMPORTED_MODULE_6__["AddViewComponent"], canActivate: [_AuthGuard_auth_gurad_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuradGuard"]], data: { expectedRole1: 'user', expectedRole2: 'admin' } },
                    { path: 'admin', component: _pages_state_pages_state_component__WEBPACK_IMPORTED_MODULE_10__["PagesStateComponent"], canActivate: [_AuthGuard_auth_gurad_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuradGuard"]], data: { expectedRole1: 'admin' } },
                    { path: 'updateview/:id', component: _update_page_update_page_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePageComponent"], canActivate: [_AuthGuard_auth_gurad_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuradGuard"]], data: { expectedRole2: 'admin' } },
                    { path: 'allimage/:id', component: _all_images_all_images_component__WEBPACK_IMPORTED_MODULE_11__["AllImagesComponent"], canActivate: [_AuthGuard_auth_gurad_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuradGuard"]], data: { expectedRole2: 'admin' } },
                    { path: 'side', component: _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SideBarComponent"], children: [
                            { path: 'travel', component: _all_pages_all_pages_component__WEBPACK_IMPORTED_MODULE_9__["AllPagesComponent"] },
                            { path: 'travel/:id', component: _views_views_component__WEBPACK_IMPORTED_MODULE_5__["ViewsComponent"] },
                        ] }
                ])
            ],
            declarations: [_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SideBarComponent"], _views_views_component__WEBPACK_IMPORTED_MODULE_5__["ViewsComponent"], _add_view_add_view_component__WEBPACK_IMPORTED_MODULE_6__["AddViewComponent"], _upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_7__["UploadPageComponent"], _update_page_update_page_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePageComponent"], _all_pages_all_pages_component__WEBPACK_IMPORTED_MODULE_9__["AllPagesComponent"], _pages_state_pages_state_component__WEBPACK_IMPORTED_MODULE_10__["PagesStateComponent"], _all_images_all_images_component__WEBPACK_IMPORTED_MODULE_11__["AllImagesComponent"]]
        })
    ], ViewPagesModule);
    return ViewPagesModule;
}());



/***/ }),

/***/ "./src/app/view-pages/views/views.component.css":
/*!******************************************************!*\
  !*** ./src/app/view-pages/views/views.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headerImage{\r\n    height: 150px;\r\n    z-index: -1;\r\n}\r\n#pageImage{\r\n    width: 100%;\r\n}\r\n#im{\r\n    float: left;\r\n   \r\n}\r\n#dis{\r\n    text-align: left;\r\n}\r\n#author{\r\n    text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/view-pages/views/views.component.html":
/*!*******************************************************!*\
  !*** ./src/app/view-pages/views/views.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"form-row\">\n  <div class=\"form-group col-md-10\">\n          <div class=\"card\">\n                  <h5 class=\"card-header\"><h2>Sri Lankan Travelling</h2>   <img class=\"card-img-top\" src=\"assets/back.jpeg\" alt=\"Cinque Terre\" id=\"headerImage\"><h3>{{page.topic}} </h3><p id=\"author\">Posted By:{{page.userEmail}}</p></h5>\n                  <div class=\"card-body\">\n                      <h5 class=\"card-title\"></h5>\n                      <div class=\"form-row\">\n                          <div class=\"form-group col-md-6\">\n                              <img class=\"card-img-top\" [src]=\"imageUrl+page.defImage\" alt=\"Cinque Terre\" id=\"pageImage\">\n                              \n                            </div>\n                            <div *ngIf=\"!(page.dis1=='null')\"  class=\"form-group col-md-6\" id=\"dis\">\n                              {{page.dis1}}\n                              </div>\n                      </div>\n                      <div class=\"form-row\">\n                          <div *ngIf=\"!(page.dis2=='null')\" class=\"form-group col-md-6\" id=\"dis\">\n                              {{page.dis2}}\n                            </div>\n                            <div *ngIf=\"!(page.dis3=='null')\" class=\"form-group col-md-6\" id=\"dis\">\n                              {{page.dis3}}\n                              </div>\n                      \n                          <div class=\"form-group col-md-4\" *ngFor=\"let p of images; index as i;\">\n                            \n                              <img  class=\"card-img-top\" [src]=\"imageUrl+images[i].imageId\" alt=\"Cinque Terre\" id=\"pageImage\">\n                           \n                            </div>\n                            \n                      </div>\n\n                    </div>\n\n          </div>\n  </div>\n</div>\n\n\nz"

/***/ }),

/***/ "./src/app/view-pages/views/views.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-pages/views/views.component.ts ***!
  \*****************************************************/
/*! exports provided: ViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsComponent", function() { return ViewsComponent; });
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





var ViewsComponent = /** @class */ (function () {
    function ViewsComponent(repository, fb, route, router) {
        this.repository = repository;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.imageUrl = this.repository.imageUrl;
    }
    ViewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this.Id = id;
            _this.getimages(id);
            _this.getpage(id);
        });
    };
    ViewsComponent.prototype.getpage = function (id) {
        var _this = this;
        this.repository.getData('getpage/' + id)
            .subscribe(function (res) {
            _this.page = res;
            console.log(res);
        }, function (error) {
        });
    };
    ViewsComponent.prototype.getimages = function (id) {
        var _this = this;
        this.repository.getData('getimage/' + id)
            .subscribe(function (res) {
            _this.images = res;
            console.log(res);
        }, function (error) {
        });
    };
    ViewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-views',
            template: __webpack_require__(/*! ./views.component.html */ "./src/app/view-pages/views/views.component.html"),
            styles: [__webpack_require__(/*! ./views.component.css */ "./src/app/view-pages/views/views.component.css")]
        }),
        __metadata("design:paramtypes", [_ShareData_repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ViewsComponent);
    return ViewsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=view-pages-view-pages-module.js.map