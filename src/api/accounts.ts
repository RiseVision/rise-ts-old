import { BaseApiResponse, cback } from './response';
import { BaseApi } from './baseApi';


export class Accounts extends BaseApi {

  /**
   * Opens a new account using the specified secrect string
   * @param secret the string to use to generate the new account
   * @param callback callback where to receive the result.
   * @returns {Promise<AccountResponse>} eventual promise if you dont want to use callbacks
   */
  open(secret: string, callback?: cback<{account: Account}>) {
    return this.rs({
        path: '/accounts/open/',
        method: 'POST',
        data: {secret}
      },
      callback
    );
  }

  /**
   * Returns balance and unconfirmed balance for the specified address!
   * @param address address to check
   * @param callback callback where to receive the result.
   * @returns {Promise<BalanceResponse>} eventual promise if you dont want to use callbacks
   */
  getBalance(address: string, callback?: cback<{balance: string, unconfirmedBalance: string}>) {
    return this.rs(
      {
        path: `/accounts/getBalance`,
        params: {address}
      },
      callback
    );
  }

  /**
   * Returns the address public key
   * @param address
   * @param callback callback where to receive the result.
   * @returns {Promise<PublicKeyResponse>} eventual promise if you dont want to use callbacks
   */
  getPublicKey(address: string, callback?: cback<{publicKey: string}>) {
    return this.rs(
      {
        path: `/accounts/getPublicKey`,
        params: {address}
      },
      callback
    );
  }


  /**
   * Generates a Public Key
   * @param secret the secret to use
   * @param callback callback where to receive the result.
   * @returns {Promise<PublicKeyResponse>} eventual promise if you dont want to use callbacks
   */
  generatePublicKey(secret: string, callback?: cback<{publicKey: string}>) {
    return this.rs(
      {
        path: `/accounts/generatePublicKey`,
        method: 'POST',
        data: {secret}
      },
      callback
    );
  }

  /**
   * Get Account information by its address
   * @param address
   * @param callback callback where to receive the result.
   * @returns {Promise<PublicKeyResponse>} eventual promise if you dont want to use callbacks
   */
  getAccount(address: string, callback?: cback<{account: Account}>) {
    return this.rs(
      {
        path: `/accounts`,
        params: {address}
      },
      callback
    );
  }

  /**
   * Return accounts delegates by using the given address
   * @param address
   * @param callback callback where to receive the result.
   * @returns {Promise<PublicKeyResponse>} eventual promise if you dont want to use callbacks
   */
  getDelegates(address: string, callback?: cback<{delegates: Delegate[]}>) {
    return this.rs(
      {
        path: `/accounts/delegates`,
        params: {address}
      },
      callback
    );
  }

  /**
   * Cast votes. The delegates array must use delegate Public Key prepended witha "+" or "-" sign wether you want to up/downvote the delegate
   * @param data
   * @param callback callback where to receive the result.
   * @returns {Promise<PublicKeyResponse>} eventual promise if you dont want to use callbacks
   */
  putDelegates(data: { secret: string, publicKey: string, delegates: string[], secondSecret?: string }, callback?: cback<any>): Promise<any> {
    return this.rs(
      {
        path: `/accounts/delegates`,
        method: 'PUT',
        data
      },
      callback
    );
  }

}

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

export interface Delegate {
  username: string
  address: string
  publicKey: string
  vote: string
  producedBlocks: number
  missedBlocks: number
  rate: number
  rank: number
  approval: number
  productivity: number
}
