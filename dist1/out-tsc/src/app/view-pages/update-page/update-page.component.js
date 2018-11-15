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
            id: [null, forms_1.Validators.required],
            topic: [null, forms_1.Validators.required],
            subtopic: [null],
            type: [null, forms_1.Validators.required],
            dis1: [null, forms_1.Validators.required],
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
        core_1.Component({
            selector: 'app-update-page',
            templateUrl: './update-page.component.html',
            styleUrls: ['./update-page.component.css']
        }),
        __metadata("design:paramtypes", [repository_service_1.RepositoryService, forms_1.FormBuilder, router_1.ActivatedRoute, router_2.Router])
    ], UpdatePageComponent);
    return UpdatePageComponent;
}());
exports.UpdatePageComponent = UpdatePageComponent;
//# sourceMappingURL=update-page.component.js.map