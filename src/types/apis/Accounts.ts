
import { BaseApiResponse, cback } from '../base';
import { Delegate } from '../responses';

export interface Accounts {
  /**
   * Opens a new account using the specified secrect string
   * @param secret the string to use to generate the new account
   * @param callback callback where to receive the result.
   * @internal
   */
  open<T = { account: Account }>(secret:string, callback?: cback<T>): Promise<T & BaseApiResponse>

  /**
   * Returns balance and unconfirmed balance for the specified address!
   * @param address address to check
   * @param callback callback where to receive the result.
   */
  getBalance<T = {balance: string, unconfirmedBalance: string}>(address: string, callback?: cback<T>): Promise<T & BaseApiResponse>

  /**
   * Returns the address public key
   * @param address
   * @param callback callback where to receive the result.
   */
  getPublicKey(address: string, callback?: cback<{publicKey: string}>)


  /**
   * Generates a Public Key
   * @param secret the secret to use
   * @param callback callback where to receive the result.
   */
  generatePublicKey(secret: string, callback?: cback<{publicKey: string}>);


  /**
   * Get Account information by its address
   * @param address
   * @param callback callback where to receive the result.
   */
  getAccount(address: string, callback?: cback<{account: Account}>)

  /**
   * Return accounts delegates by using the given address
   * @param address
   * @param callback callback where to receive the result.
   */
  getDelegates(address: string, callback?: cback<{delegates: Delegate[]}>)
  /**
   * Cast votes. The delegates array must use delegate Public Key prepended witha "+" or "-" sign wether you want to up/downvote the delegate
   * @param data
   * @param callback callback where to receive the result.
   */
  putDelegates(data: { secret: string, publicKey: string, delegates: string[], secondSecret?: string }, callback?: cback<any>)
}



