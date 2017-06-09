import { BaseApi } from './baseApi';
import { BaseApiResponse, cback } from './response';
import { Transaction } from './delegates';

export class Transactions extends BaseApi {

  get<T>(id: string, callback?: cback<{transaction: Transaction<T>}>) {
    return this.requestSender({
      path: '/transactions/get',
      qs: {id},
    }, callback);
  }

  getList(query:{blockId?:string, senderId?:string, recipientId?:string, limit?:number, offset?:number, orderBy?:string} = {}, callback?: cback<{transactions: Transaction<any>[]}>) {
    return this.requestSender({
      path: '/transactions',
      qs: {...query},
    }, callback);
  }

  send(conf:{secret:string, amount: number, recipientId: string, publicKey?: string, secondSecret?: string}, callback?: cback<any> ) {
    return this.requestSender({
      path: '/transactions',
      method: 'PUT',
      body: {...conf}
    }, callback);
  }

  getUnconfirmedTransactions(callback?: cback<{transactions: Transaction<any>[]}>) {
    return this.requestSender({
      path: '/transactions/unconfirmed'
    }, callback);
  }

  getUnconfirmedTransaction(id: string, callback?: cback<{transactions: Transaction<any>[]}>) {
    return this.requestSender({
      path: '/transactions/unconfirmed/get',
      qs: {id}
    }, callback);
  }

}
