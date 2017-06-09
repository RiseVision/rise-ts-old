import { BaseApi } from './baseApi';
import { cback } from './response';

export class MultiSignatures extends BaseApi {
  getPending(publicKey: string, callback?: cback<any>) {
    return this.requestSender({
      path: '/multisignatures/pending',
      qs: {
        publicKey
      },
      method: 'GET'
    }, callback);
  }

  createMultiSigAccount(sig: { secret: string, lifetime: number, min: number, publicKeys: string[] }, callback?: cback<any>) {
    return this.requestSender({
      path: '/multisignatures',
      method: 'PUT',
      body: {
        secret: sig.secret,
        lifetime: sig.lifetime, // hours in integer
        min: sig.min, // min signatures need to approve
        keysgroup: sig.publicKeys
      }
    }, callback);
  }

  sign(obj: { secret: string, publicKey: string, transactionId: string }, callback?: cback<any>) {
    return this.requestSender({
      path: '/multisignatures/sign',
      method: 'POST',
      body: {
        secret: obj.secret,
        publicKey: obj.publicKey,
        transactionId: obj.transactionId
      }
    }, callback);
  }

  getAccounts(publicKey: string, callback?: cback<any>) {
    return this.requestSender({
      path: '/multisignatures/accounts',
      qs: {publicKey},
      method: 'GET'
    }, callback);
  }
}