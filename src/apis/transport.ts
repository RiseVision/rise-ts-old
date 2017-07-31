import { BaseApiResponse, cback, rs } from '../types/base';
import { TransportApi, TransportHeaders } from '../types/apis/TransportAPI';
import { BaseTransaction } from '../types/beans';

export const transport = (rs: rs): (headers: TransportHeaders) => TransportApi =>
  (headers: TransportHeaders) => ({
    getHeight(cback) {
      return rs({
        noApiPrefix: true,
        path       : 'peer/height',
        headers
      }, cback);
    },
    listPeers(cback) {
      return rs({
        noApiPrefix: true,
        path       : 'peer/list',
        headers
      }, cback);
    },
    ping(cback) {
      return rs({
        noApiPrefix: true,
        path       : 'peer/ping',
        headers
      }, cback);
    },
    postTransaction(transaction: BaseTransaction<any>, cback) {
      return rs({
        noApiPrefix: true,
        path       : 'peer/transactions',
        method     : 'POST',
        data       : {transaction},
        headers
      }, cback);
    },
    postTransactions(transactions: BaseTransaction<any>[], cback) {
      return rs({
        noApiPrefix: true,
        path       : 'peer/transactions',
        method     : 'POST',
        data       : {transactions},
        headers
      }, cback);
    }
  });