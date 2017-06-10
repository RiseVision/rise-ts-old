import { BaseApiResponse, cback } from './api/response';
import axios from 'axios';
import { Accounts } from './api/accounts';
import { Loader } from './api/loader';
import { Transactions } from './api/transactions';
import { Peers } from './api/peers';
import { Blocks } from './api/blocks';
import { Signatures } from './api/signatures';
import { Delegates } from './api/delegates';
import { MultiSignatures } from './api/multiSignatures';

export interface APIWrapper {
  /**
   * Accounts APIs
   */
  accounts: Accounts
  /**
   * Blocks Query APIs
   */
  blocks: Blocks
  /**
   * Node loading status APIs
   */
  loader: Loader
  /**
   * Transactions APIs
   */
  transactions: Transactions
  /**
   * Peers APIs
   */
  peers: Peers
  /**
   * Signature APIs
   */
  signatures: Signatures
  /**
   * Delegates APIs
   */
  delegates: Delegates
  /**
   * Multi Signature Accounts APIs
   */
  multiSignatures: MultiSignatures
}

/**
 * Create an API Wrapper
 * @param nodeAddress ex https://localhost:1234 (no leading slash)
 * @returns {{accounts: Accounts, loader: Loader, transactions: Transactions, peers: Peers, blocks: Blocks, signatures: Signatures, delegates: Delegates, multiSignatures: MultiSignatures}}
 */
export const createWrapper = (nodeAddress: string): APIWrapper => {
  const requester = <R>(obj: { params?: any, path: string, method?: string, data?: any }, cback: cback<R>): Promise<R & BaseApiResponse> => {
    return axios({
      url: `${nodeAddress}/api${obj.path}`,
      json: true,
      ...obj
    })
      .then(resp => {
        if (resp.data.status == false) {
          return Promise.reject(resp.data.error);
        }
        return resp.data;
      })
      .then(a => {
        if (typeof(cback) !== 'undefined') {
          cback(null, a);
        }
        return a;
      })
      .catch(err => {
        if (typeof(cback) !== 'undefined') {
          cback(err);
        }
        return Promise.reject(err);
      })
  };

  return {
    accounts: new Accounts(requester),
    loader: new Loader(requester),
    transactions: new Transactions(requester),
    peers: new Peers(requester),
    blocks: new Blocks(requester),
    signatures: new Signatures(requester),
    delegates: new Delegates(requester),
    multiSignatures: new MultiSignatures(requester)

  };
}