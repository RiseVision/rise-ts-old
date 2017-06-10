import { BaseApi } from './baseApi';
import { BaseApiResponse, cback } from './response';
import { Transaction } from './delegates';

export class Transactions extends BaseApi {

  get<T>(id: string, callback?: cback<{transaction: Transaction<T>}>) {
    return this.rs({
      path: '/transactions/get',
      params: {id},
    }, callback);
  }

  getList(query:{blockId?:string, senderId?:string, recipientId?:string, limit?:number, offset?:number, orderBy?:string} = {}, callback?: cback<{transactions: Transaction<any>[]}>) {
    return this.rs({
      path: '/transactions',
      params: {...query},
    }, callback);
  }

  send(conf:{secret:string, amount: number, recipientId: string, publicKey?: string, secondSecret?: string}, callback?: cback<any> ) {
    return this.rs({
      path: '/transactions',
      method: 'PUT',
      data: {...conf}
    }, callback);
  }

  getUnconfirmedTransactions(callback?: cback<{transactions: Transaction<any>[]}>) {
    return this.rs({
      path: '/transactions/unconfirmed'
    }, callback);
  }

  getUnconfirmedTransaction(id: string, callback?: cback<{transactions: Transaction<any>[]}>) {
    return this.rs({
      path: '/transactions/unconfirmed/get',
      params: {id}
    }, callback);
  }

}
