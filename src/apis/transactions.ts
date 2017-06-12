import { cback, rs } from '../types/base';
import { Transaction } from '../types/responses';
import { TransactionsAPI } from '../types/apis/TransactionsAPI';
/**
 * @private
 * @internal
 */
export const transactions = (rs: rs): TransactionsAPI => ({

  get<T>(id: string, callback?: cback<{ transaction: Transaction<T> }>) {
    return rs({
      path: '/transactions/get',
      params: {id},
    }, callback);
  },

  getList(query: { blockId?: string, senderId?: string, recipientId?: string, limit?: number, offset?: number, orderBy?: string } = {}, callback?: cback<{ transactions: Transaction<any>[] }>) {
    return rs({
      path: '/transactions',
      params: {...query},
    }, callback);
  },

  send(conf: { secret: string, amount: number, recipientId: string, publicKey?: string, secondSecret?: string }, callback?: cback<any>) {
    return rs({
      path: '/transactions',
      method: 'PUT',
      data: {...conf}
    }, callback);
  },

  getUnconfirmedTransactions(callback?: cback<{ transactions: Transaction<any>[] }>) {
    return rs({
      path: '/transactions/unconfirmed'
    }, callback);
  },

  getUnconfirmedTransaction(id: string, callback?: cback<{ transactions: Transaction<any>[] }>) {
    return rs({
      path: '/transactions/unconfirmed/get',
      params: {id}
    }, callback);
  }
});
