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
var http_1 = require("@angular/common/http");
var environment_1 = require("./../../environments/environment");
var RepositoryService = /** @class */ (function () {
    function RepositoryService(http) {
        this.http = http;
        this.urlAddress = environment_1.environment.employee_url;
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
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem('token')
            })
        };
    };
    RepositoryService.prototype.generateHeadersfile = function () {
        return {
            headers: new http_1.HttpHeaders({
                'Authorization': 'bearer ' + localStorage.getItem('token'),
                'enctype': 'multipart/form-data'
            })
        };
    };
    RepositoryService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RepositoryService);
    return RepositoryService;
}());
exports.RepositoryService = RepositoryService;
//# sourceMappingURL=repository.service.js.map