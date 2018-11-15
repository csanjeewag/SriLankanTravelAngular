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
var auth_service_service_1 = require("./auth-service.service");
var repository_service_1 = require("./../ShareData/repository.service");
var AuthGuradGuard = /** @class */ (function () {
    function AuthGuradGuard(auth, repository) {
        this.auth = auth;
        this.repository = repository;
    }
    AuthGuradGuard.prototype.canActivate = function (next, state) {
        this.auth.tokencheckRole();
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
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [auth_service_service_1.AuthServiceService, repository_service_1.RepositoryService])
    ], AuthGuradGuard);
    return AuthGuradGuard;
}());
exports.AuthGuradGuard = AuthGuradGuard;
//# sourceMappingURL=auth-gurad.guard.js.map