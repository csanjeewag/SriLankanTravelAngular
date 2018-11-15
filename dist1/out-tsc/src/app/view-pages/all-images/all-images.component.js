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
var repository_service_1 = require("./../../ShareData/repository.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var AllImagesComponent = /** @class */ (function () {
    function AllImagesComponent(route, router, repository) {
        this.route = route;
        this.router = router;
        this.repository = repository;
        this.imageUrl = "http://localhost:5308/";
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
        console.log(id);
        var formData = new FormData();
        formData.append('Id', id);
        this.repository.postFile(apiUrl, formData)
            .subscribe(function (res) {
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
        core_1.Component({
            selector: 'app-all-images',
            templateUrl: './all-images.component.html',
            styleUrls: ['./all-images.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.Router, repository_service_1.RepositoryService])
    ], AllImagesComponent);
    return AllImagesComponent;
}());
exports.AllImagesComponent = AllImagesComponent;
//# sourceMappingURL=all-images.component.js.map