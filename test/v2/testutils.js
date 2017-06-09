"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function apiBasicChecker(spy, url, givenCallback) {
    chai_1.expect(spy.called).is.true;
    chai_1.expect(spy.calledOnce).is.true;
    chai_1.expect(spy.firstCall.args[0].url).eq(url);
    chai_1.expect(spy.firstCall.args[1]).deep.eq(givenCallback);
}
exports.apiBasicChecker = apiBasicChecker;
