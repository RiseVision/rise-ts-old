import { BaseApiResponse, cback } from './api/response';
import * as request from 'request-promise';
import { Accounts } from './api/accounts';
import { Loader } from './api/loader';
import { Transactions } from './api/transactions';
import { Peers } from './api/peers';
import { Blocks } from './api/blocks';
import { Signatures } from './api/signatures';
import { Delegates } from './api/delegates';
import { MultiSignatures } from './api/multiSignatures';

export interface Wrapper {
  accounts: Accounts
  loader: Loader
  transactions: Transactions
  peers: Peers
  signatures: Signatures
  blocks: Blocks
  delegates: Delegates
  multiSignatures: MultiSignatures
}

export const createWrapper = (nodeAddress: string): Wrapper => {
  const requester = <R>(obj: { qs?: any, path: string, method?: string, body?: any }, cback: cback<R>): Promise<R & BaseApiResponse> => {
    return request({
      url: `${nodeAddress}/api${obj.path}`,
      json: true,
      ...obj
    })
      .then(resp => {
        if (resp.success == false) {
          return Promise.reject(resp.error);
        }
        return resp;
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