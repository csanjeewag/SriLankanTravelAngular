"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var auth_gurad_guard_1 = require("./auth-gurad.guard");
describe('AuthGuradGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [auth_gurad_guard_1.AuthGuradGuard]
        });
    });
    it('should ...', testing_1.inject([auth_gurad_guard_1.AuthGuradGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=auth-gurad.guard.spec.js.map