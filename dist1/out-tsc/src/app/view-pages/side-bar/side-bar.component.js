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
var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(route, router, repository, fb) {
        this.route = route;
        this.router = router;
        this.repository = repository;
        this.fb = fb;
        this.url = "http://localhost:4200/view/side/travel/";
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
        core_1.Component({
            selector: 'app-side-bar',
            templateUrl: './side-bar.component.html',
            styleUrls: ['./side-bar.component.css']
        }),
        __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.Router, repository_service_1.RepositoryService, forms_1.FormBuilder])
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=side-bar.component.js.map