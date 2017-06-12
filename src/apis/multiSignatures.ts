import { cback, rs } from '../types/base';
import { MultiSignaturesAPI } from '../types/apis/MultiSignaturesAPI';
/**
 * @private
 * @internal
 */
export const multiSignatures = (rs: rs): MultiSignaturesAPI => ({
  getPending(publicKey: string, callback?: cback<any>) {
    return rs({
      path: '/multisignatures/pending',
      params: {
        publicKey
      },
      method: 'GET'
    }, callback);
  },

  createMultiSigAccount(sig: { secret: string, lifetime: number, min: number, publicKeys: string[] }, callback?: cback<any>) {
    return rs({
      path: '/multisignatures',
      method: 'PUT',
      data: {
        secret: sig.secret,
        lifetime: sig.lifetime, // hours in integer
        min: sig.min, // min signatures need to approve
        keysgroup: sig.publicKeys
      }
    }, callback);
  },

  sign(obj: { secret: string, publicKey: string, transactionId: string }, callback?: cback<any>) {
    return rs({
      path: '/multisignatures/sign',
      method: 'POST',
      data: {
        secret: obj.secret,
        publicKey: obj.publicKey,
        transactionId: obj.transactionId
      }
    }, callback);
  },

  getAccounts(publicKey: string, callback?: cback<any>) {
    return rs({
      path: '/multisignatures/accounts',
      params: {publicKey},
      method: 'GET'
    }, callback);
  }
});
