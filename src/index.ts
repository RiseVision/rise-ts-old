import axios from 'axios';
import {
  AccountsAPI,
  BlocksAPI,
  DappsAPI,
  DelegatesAPI,
  LoaderAPI,
  MultiSignaturesAPI,
  PeersAPI,
  SignaturesAPI,
  TransactionsAPI
} from './types/apis/';
import {
  accounts,
  blocks,
  dapps,
  delegates,
  loader,
  multiSignatures,
  peers,
  signatures,
  transactions
} from './apis/';
import { BaseApiResponse, cback } from './types/base';

export interface Rise extends APIWrapper {
  /**
   * Default Node Address: ex: http://localhost:1234 (no leading slash)
   */
  nodeAddress: string

  /**
   * Creates a new API Wrapper with the given node address.
   * So that you can be connected to multiple nodes at once.
   * @param nodeAddress Ex: http://localhost:1234 (no leading slash)
   */
  newWrapper(nodeAddress: string): APIWrapper
}

export interface APIWrapper {
  /**
   * Accounts APIs
   */
  accounts: AccountsAPI
  /**
   * Blocks Query APIs
   */
  blocks: BlocksAPI
  /**
   * Node loading status APIs
   */
  loader: LoaderAPI
  /**
   * Transactions APIs
   */
  transactions: TransactionsAPI
  /**
   * Peers APIs
   */
  peers: PeersAPI
  /**
   * Signature APIs
   */
  signatures: SignaturesAPI
  /**
   * Delegates APIs
   */
  delegates: DelegatesAPI
  /**
   * Multi Signature Accounts APIs
   */
  multiSignatures: MultiSignaturesAPI

  /**
   * Decentralized Apps APIs (in progress)
   */
  dapps: DappsAPI
}

const requester = (nodeAddress) => <R>(obj: { params?: any, path: string, method?: string, data?: any }, cback: cback<R>): Promise<R & BaseApiResponse> => {
  return axios({
    url: `${nodeAddress}/api${obj.path}`,
    json: true,
    ...obj
  })
    .then(resp => {
      if (resp.data.success == false) {
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
export const rise: Rise = (() => {
  const toRet = {
    nodeAddress: '',
    newWrapper(nodeAddress: string): APIWrapper {
      return {
        accounts: accounts(requester(nodeAddress)),
        loader: loader(requester(nodeAddress)),
        transactions: transactions(requester(nodeAddress)),
        peers: peers(requester(nodeAddress)),
        blocks: blocks(requester(nodeAddress)),
        signatures: signatures(requester(nodeAddress)),
        delegates: delegates(requester(nodeAddress)),
        multiSignatures: multiSignatures(requester(nodeAddress)),
        dapps: dapps(requester(nodeAddress))
      }
    }
  } as Rise;

  function rproxy<R>(obj: { params?: any, path: string, method?: string, data?: any }, cback: cback<R>): Promise<R & BaseApiResponse> {
    return requester(toRet.nodeAddress).apply(null, arguments);
  };

  toRet.accounts = accounts(rproxy);
  toRet.loader = loader(rproxy);
  toRet.transactions = transactions(rproxy);
  toRet.peers = peers(rproxy);
  toRet.blocks = blocks(rproxy);
  toRet.signatures = signatures(rproxy);
  toRet.delegates = delegates(rproxy);
  toRet.multiSignatures = multiSignatures(rproxy);
  toRet.dapps = dapps(rproxy);
  return toRet;
})();

