"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var auth_service_service_1 = require("./auth-service.service");
describe('AuthServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [auth_service_service_1.AuthServiceService]
        });
    });
    it('should be created', testing_1.inject([auth_service_service_1.AuthServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=auth-service.service.spec.js.map