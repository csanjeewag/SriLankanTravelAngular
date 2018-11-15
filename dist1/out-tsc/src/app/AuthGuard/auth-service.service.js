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
var repository_service_1 = require("./../ShareData/repository.service");
var angular_jwt_1 = require("@auth0/angular-jwt");
var router_1 = require("@angular/router");
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
    AuthServiceService.prototype.isRC = function () {
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
        var helper = new angular_jwt_1.JwtHelperService();
        var token = localStorage.getItem('token');
        var ex = helper.isTokenExpired(token);
        if (ex == true) {
            localStorage.removeItem('token');
        }
        return ex;
    };
    AuthServiceService.prototype.tokencheckRole = function () {
        var token = localStorage.getItem('token');
        var helper = new angular_jwt_1.JwtHelperService();
        var decodedToken = helper.decodeToken(token);
        return decodedToken.sub;
    };
    AuthServiceService.prototype.tokencheckId = function () {
        var token = localStorage.getItem('token');
        var helper = new angular_jwt_1.JwtHelperService();
        var decodedToken = helper.decodeToken(token);
        // console.log(decodedToken);
        return decodedToken.nameid;
    };
    AuthServiceService.prototype.tokenGetName = function () {
        var token = localStorage.getItem('token');
        var helper = new angular_jwt_1.JwtHelperService();
        var decodedToken = helper.decodeToken(token);
        //console.log(decodedToken);
        return decodedToken.unique_name;
    };
    AuthServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [repository_service_1.RepositoryService, router_1.Router])
    ], AuthServiceService);
    return AuthServiceService;
}());
exports.AuthServiceService = AuthServiceService;
//# sourceMappingURL=auth-service.service.js.map