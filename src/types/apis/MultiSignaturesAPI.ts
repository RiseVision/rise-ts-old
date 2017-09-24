import {BaseApiResponse, cback} from '../base';
import {MultiSigTransaction} from '../beans';

export interface MultiSignaturesAPI {
  /**
   * Retrieve Pending multisig apis.
   * @param {string} publicKey multisig account publicKey
   * @param callback callback where to receive the result.
   */
  getPending(publicKey: string, callback?: cback<{ transactions: { min: number, max: number, lifetime: number, signed: true, transaction: MultiSigTransaction<any> }[] }>) : Promise<{ transactions: { min: number, max: number, lifetime: number, signed: true, transaction: MultiSigTransaction<any> }[] } & BaseApiResponse>

  createMultiSigAccount(sig: { secret: string, lifetime: number, min: number, publicKeys: string[] }, callback?: cback<any>)

  sign(obj: { secret: string, publicKey: string, transactionId: string }, callback?: cback<any>)

  getAccounts(publicKey: string, callback?: cback<any>)
}