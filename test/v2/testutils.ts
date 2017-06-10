import { expect } from 'chai';

export function apiBasicChecker(spy:sinon.SinonSpy, path:string, givenCallback?:any) {
  expect(spy.called).is.true;
  expect(spy.calledOnce).is.true;
  expect(spy.firstCall.args[0].path).eq(path);
  expect(spy.firstCall.args[1]).deep.eq(givenCallback);
}
