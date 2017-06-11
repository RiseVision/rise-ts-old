import { accounts } from '../../src/apis/accounts';
import * as sinon from 'sinon';
import { expect } from 'chai';
import { apiBasicChecker } from './testutils';

describe('Accounts', () => {

  it('.open should propagate given params', () => {
    const spy = sinon.spy();
    accounts(spy).open('secret');
    apiBasicChecker(spy, '/accounts/open/', undefined);
    expect(spy.firstCall.args[0].method).is.eq('POST');
    expect(spy.firstCall.args[0].data).is.not.undefined;
    expect(spy.firstCall.args[0].data).is.deep.eq({secret: 'secret'});
  });

  it('.getBalance should propagate given params and construct url correcly', () => {
    const spy = sinon.spy();
    accounts(spy).getBalance('address');
    apiBasicChecker(spy, '/accounts/getBalance', undefined);
    expect(spy.firstCall.args[0].params).to.be.deep.eq({address: 'address'})
  });

  it('.getPublicKey should propagate given params and construct url correcly', () => {
    const spy = sinon.spy();
    accounts(spy).getPublicKey('address');
    apiBasicChecker(spy, '/accounts/getPublicKey', undefined);
    expect(spy.firstCall.args[0].params).to.be.deep.eq({address: 'address'})

  });

  it('.generatePublicKey should propagate given params in POST', () => {
    const spy = sinon.spy();
    accounts(spy).generatePublicKey('secret');
    apiBasicChecker(spy, '/accounts/generatePublicKey', undefined);
    expect(spy.firstCall.args[0].method).is.eq('POST');
    expect(spy.firstCall.args[0].data).is.not.undefined;
    expect(spy.firstCall.args[0].data).is.deep.eq({secret: 'secret'});
  });

  it('.getAccount should propagate given params and construct url correctly', () => {
    const spy = sinon.spy();
    accounts(spy).getAccount('address');
    apiBasicChecker(spy, '/accounts', undefined);
    expect(spy.firstCall.args[0].params).to.be.deep.eq({address: 'address'});

  });

  it('.getDelegates should propagate given params and construct url correctly', () => {
    const spy = sinon.spy();
    accounts(spy).getDelegates('address');
    apiBasicChecker(spy, '/accounts/delegates', undefined);
    expect(spy.firstCall.args[0].params).to.be.deep.eq({address: 'address'});

  });

  it('.putDelegates should propagate given params in PUT method', () => {
    const spy = sinon.spy();
    const body = {
      secret: 'theSecret',
      publicKey: 'public',
      delegates: ['+DELEGATE1', '-DELEGATE2']
    };
    accounts(spy).putDelegates(body);
    apiBasicChecker(spy, '/accounts/delegates', undefined);
    expect(spy.firstCall.args[0].method).is.eq('PUT');
    expect(spy.firstCall.args[0].data).is.deep.eq(body);
  });
});