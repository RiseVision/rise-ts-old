import {Peer, Transaction, TransactionType, BaseTransaction, Signature} from '../beans';
import { BaseApiResponse, cback } from '../base';

export interface TransportHeaders {
  nethash: string
  port: number
  version: string

  broadhash?: string;
  height?: number;
  nonce?: number;
  os?: string;

}

export interface TransportApi {

  /**
   * Ping peer!
   * Promise will resolve if peer responds with an Ack
   */
  ping(callback?: cback<void>): Promise<BaseApiResponse>

  /**
   * Get peer using transport api.
   */
  getHeight(callback?: cback<{ height: number }>): Promise<{ height: number } & BaseApiResponse>

  /**
   * List peers
   * @param {cback<{peers: Peer[]}>} callback
   * @returns {Promise<{peers: Peer[]} & BaseApiResponse>}
   */
  listPeers(callback?: cback<{ peers: Peer[] }>): Promise<{ peers: Peer[] } & BaseApiResponse>

  /**
   * Post a signed tx to this peer.
   * @param {Transaction<any>} tx
   * @param {cback<{transactionId: string}>} callback
   * @returns {Promise<{transactionId: string} & BaseApiResponse>}
   */
  postTransaction(tx: BaseTransaction<any>, callback?: cback<{ transactionId: string }>): Promise<{ transactionId: string } & BaseApiResponse>

  /**
   * Post several signed txs to this peer
   * @param {Transaction<any>[]} txs
   * @param {cback<void>} callback
   * @returns {Promise<BaseApiResponse>}
   */
  postTransactions(txs: BaseTransaction<any>[], callback?: cback<void>): Promise<BaseApiResponse>

  /**
   * Post one or more signature for a multisig tx.
   * @param {Signature | Signature[]} signature
   * @param {cback<any>} callback
   * @returns {Promise<BaseApiResponse>}
   */
  postSignature(signature: Signature|Signature[], callback?: cback<void>): Promise<BaseApiResponse>


}
