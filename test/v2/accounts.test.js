"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accounts_1 = require("../../publicapiv2/accounts");
var sinon = require("sinon");
var chai_1 = require("chai");
var testutils_1 = require("./testutils");
describe('Accounts', function () {
    it('.open should propagate given params', function () {
        var spy = sinon.spy();
        new accounts_1.Accounts(spy).open('secret');
        testutils_1.apiBasicChecker(spy, '/accounts/open/', undefined);
        chai_1.expect(spy.firstCall.args[0].method).is.eq('POST');
        chai_1.expect(spy.firstCall.args[0].body).is.not.undefined;
        chai_1.expect(spy.firstCall.args[0].body).is.deep.eq({ secret: 'secret' });
    });
    it('.getBalance should propagate given params and construct url correcly', function () {
        var spy = sinon.spy();
        new accounts_1.Accounts(spy).getBalance('address');
        testutils_1.apiBasicChecker(spy, '/accounts/getBalance?address=address', undefined);
    });
    it('.getPublicKey should propagate given params and construct url correcly', function () {
        var spy = sinon.spy();
        new accounts_1.Accounts(spy).getPublicKey('address');
        testutils_1.apiBasicChecker(spy, '/accounts/getPublicKey?address=address', undefined);
    });
    it('.generatePublicKey should propagate given params in POST', function () {
        var spy = sinon.spy();
        new accounts_1.Accounts(spy).generatePublicKey('secret');
        testutils_1.apiBasicChecker(spy, '/accounts/generatePublicKey', undefined);
        chai_1.expect(spy.firstCall.args[0].method).is.eq('POST');
        chai_1.expect(spy.firstCall.args[0].body).is.not.undefined;
        chai_1.expect(spy.firstCall.args[0].body).is.deep.eq({ secret: 'secret' });
    });
    it('.getAccount should propagate given params and construct url correctly', function () {
        var spy = sinon.spy();
        new accounts_1.Accounts(spy).getAccount('address');
        testutils_1.apiBasicChecker(spy, '/accounts?address=address', undefined);
    });
    it('.getDelegates should propagate given params and construct url correctly', function () {
        var spy = sinon.spy();
        new accounts_1.Accounts(spy).getDelegates('address');
        testutils_1.apiBasicChecker(spy, '/accounts/delegates?address=address', undefined);
    });
    it('.putDelegates should propagate given params in PUT method', function () {
        var spy = sinon.spy();
        var body = {
            secret: 'theSecret',
            publicKey: 'public',
            delegates: ['+DELEGATE1', '-DELEGATE2']
        };
        new accounts_1.Accounts(spy).putDelegates(body);
        testutils_1.apiBasicChecker(spy, '/accounts/delegates', undefined);
        chai_1.expect(spy.firstCall.args[0].method).is.eq('PUT');
        chai_1.expect(spy.firstCall.args[0].body).is.deep.eq(body);
    });
});
