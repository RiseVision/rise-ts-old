import { cback } from '../base';

export interface MultiSignaturesAPI {
  getPending(publicKey: string, callback?: cback<any>)

  createMultiSigAccount(sig: { secret: string, lifetime: number, min: number, publicKeys: string[] }, callback?: cback<any>)

  sign(obj: { secret: string, publicKey: string, transactionId: string }, callback?: cback<any>)

  getAccounts(publicKey: string, callback?: cback<any>)
}