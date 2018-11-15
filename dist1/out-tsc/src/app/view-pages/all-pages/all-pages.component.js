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
var AllPagesComponent = /** @class */ (function () {
    function AllPagesComponent(route, router, repository, fb) {
        this.route = route;
        this.router = router;
        this.repository = repository;
        this.fb = fb;
        this.imageUrl = "http://localhost:5308/";
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
        core_1.Component({
            selector: 'app-all-pages',
            templateUrl: './all-pages.component.html',
            styleUrls: ['./all-pages.component.css']
        }),
        __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.Router, repository_service_1.RepositoryService, forms_1.FormBuilder])
    ], AllPagesComponent);
    return AllPagesComponent;
}());
exports.AllPagesComponent = AllPagesComponent;
//# sourceMappingURL=all-pages.component.js.map