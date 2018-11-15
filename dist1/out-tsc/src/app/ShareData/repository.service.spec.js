"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var repository_service_1 = require("./repository.service");
describe('RepositoryService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [repository_service_1.RepositoryService]
        });
    });
    it('should be created', testing_1.inject([repository_service_1.RepositoryService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=repository.service.spec.js.map