import { expect } from 'chai';

export function apiBasicChecker(spy:sinon.SinonSpy, url:string, givenCallback?:any) {
  expect(spy.called).is.true;
  expect(spy.calledOnce).is.true;
  expect(spy.firstCall.args[0].url).eq(url);
  expect(spy.firstCall.args[1]).deep.eq(givenCallback);
}
