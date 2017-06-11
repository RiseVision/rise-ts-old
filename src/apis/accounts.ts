
import {  cback } from '../types/base';
import { rs } from '../types/base';
import { Delegate } from '../types/responses';
import { Accounts } from '../types/apis/Accounts';

/**
 * @private
 * @internal
 */
export const accounts = (rs:rs): Accounts => ({


  open(secret: string, callback?: cback<{account: Account}>) {
    return rs({
        path: '/accounts/open/',
        method: 'POST',
        data: {secret}
      },
      callback
    );
  },


  getBalance(address: string, callback?: cback<{balance: string, unconfirmedBalance: string}>) {
    return rs(
      {
        path: `/accounts/getBalance`,
        params: {address}
      },
      callback
    );
  },

  getPublicKey(address: string, callback?: cback<{publicKey: string}>) {
    return rs(
      {
        path: `/accounts/getPublicKey`,
        params: {address}
      },
      callback
    );
  },

  generatePublicKey(secret: string, callback?: cback<{publicKey: string}>) {
    return rs(
      {
        path: `/accounts/generatePublicKey`,
        method: 'POST',
        data: {secret}
      },
      callback
    );
  },

  getAccount(address: string, callback?: cback<{account: Account}>) {
    return rs(
      {
        path: `/accounts`,
        params: {address}
      },
      callback
    );
  },

  getDelegates(address: string, callback?: cback<{delegates: Delegate[]}>) {
    return rs(
      {
        path: `/accounts/delegates`,
        params: {address}
      },
      callback
    );
  },

  putDelegates(data: { secret: string, publicKey: string, delegates: string[], secondSecret?: string }, callback?: cback<any>): Promise<any> {
    return rs(
      {
        path: `/accounts/delegates`,
        method: 'PUT',
        data
      },
      callback
    );
  }

})

export interface Account {
  address: string
  unconfirmedBalance: string
  balance: string
  publicKey: string
  unconfirmedSignature: number
  secondSignature: number
  secondPublicKey: string
  multisignatures: any[]
  u_multisignatures: any[]
}
