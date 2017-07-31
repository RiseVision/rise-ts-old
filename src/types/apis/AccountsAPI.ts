import { BaseApiResponse, cback } from '../base';
import { Account, Delegate } from '../beans';

export interface AccountsAPI {
  /**
   * Opens a new account using the specified secrect string
   * @param secret the string to use to generate the new account
   * @param callback callback where to receive the result.
   */
  open(secret: string, callback?: cback<{ account: Account }>): Promise<{ account: Account } & BaseApiResponse>

  /**
   * Returns balance and unconfirmed balance for the specified address!
   * @param address address to check
   * @param callback callback where to receive the result.
   */
  getBalance(address: string, callback?: cback<{ balance: string, unconfirmedBalance: string }>): Promise<{ balance: string, unconfirmedBalance: string } & BaseApiResponse>

  /**
   * Returns the address public key
   * @param address
   * @param callback callback where to receive the result.
   */
  getPublicKey(address: string, callback?: cback<{ publicKey: string }>): Promise<{ publicKey: string } & BaseApiResponse>


  /**
   * Generates a Public Key
   * @param secret the secret to use
   * @param callback callback where to receive the result.
   */
  generatePublicKey(secret: string, callback?: cback<{ publicKey: string }>): Promise<{ publicKey: string } & BaseApiResponse>


  /**
   * Get Account information by its address
   * @param address
   * @param callback callback where to receive the result.
   */
  getAccount(address: string, callback?: cback<{ account: Account }>): Promise<{ account: Account } & BaseApiResponse>

  /**
   * Get Account information by its publicKey
   * @param publicKey
   * @param callback callback where to receive the result.
   */
  getAccountByPublicKey(publicKey: string, callback?: cback<{ account: Account }>): Promise<{ account: Account } & BaseApiResponse>


  /**
   * Return accounts delegates by using the given address
   * @param address
   * @param callback callback where to receive the result.
   */
  getDelegates(address: string, callback?: cback<{ delegates: Delegate[] }>): Promise<{ delegates: Delegate[] } & BaseApiResponse>

  /**
   * Cast votes. The delegates array must use delegate Public Key prepended witha "+" or "-" sign wether you want to up/downvote the delegate
   * @param data
   * @param callback callback where to receive the result.
   */
  putDelegates(data: { secret: string, publicKey: string, delegates: string[], secondSecret?: string }, callback?: cback<any>): Promise<any>
}



