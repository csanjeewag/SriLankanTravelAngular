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
var ViewsComponent = /** @class */ (function () {
    function ViewsComponent(repository, fb, route, router) {
        this.repository = repository;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.imageUrl = "http://localhost:5308/";
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
        core_1.Component({
            selector: 'app-views',
            templateUrl: './views.component.html',
            styleUrls: ['./views.component.css']
        }),
        __metadata("design:paramtypes", [repository_service_1.RepositoryService, forms_1.FormBuilder, router_1.ActivatedRoute, router_2.Router])
    ], ViewsComponent);
    return ViewsComponent;
}());
exports.ViewsComponent = ViewsComponent;
//# sourceMappingURL=views.component.js.map