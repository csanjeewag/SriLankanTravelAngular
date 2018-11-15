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
        core_1.Component({
            selector: 'app-pages-state',
            templateUrl: './pages-state.component.html',
            styleUrls: ['./pages-state.component.css']
        }),
        __metadata("design:paramtypes", [repository_service_1.RepositoryService, router_1.ActivatedRoute, router_2.Router])
    ], PagesStateComponent);
    return PagesStateComponent;
}());
exports.PagesStateComponent = PagesStateComponent;
//# sourceMappingURL=pages-state.component.js.map