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
var AddViewComponent = /** @class */ (function () {
    function AddViewComponent(router, route, repository, fb) {
        this.router = router;
        this.route = route;
        this.repository = repository;
        this.fb = fb;
        this.ImageUrl = [];
        this.FileImage = [];
    }
    AddViewComponent.prototype.ngOnInit = function () {
        this.pageForm = this.fb.group({
            id: [null, forms_1.Validators.required],
            topic: [null, forms_1.Validators.required],
            subtopic: [null],
            type: [null, forms_1.Validators.required],
            dis1: [null],
            dis2: [null],
            dis3: [null],
            image: [null, forms_1.Validators.required]
        });
        this.formGroup = this.fb.group({
            file: [null, forms_1.Validators.required]
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
        core_1.Component({
            selector: 'app-add-view',
            templateUrl: './add-view.component.html',
            styleUrls: ['./add-view.component.css']
        }),
        __metadata("design:paramtypes", [router_2.Router, router_1.ActivatedRoute, repository_service_1.RepositoryService, forms_1.FormBuilder])
    ], AddViewComponent);
    return AddViewComponent;
}());
exports.AddViewComponent = AddViewComponent;
//# sourceMappingURL=add-view.component.js.map