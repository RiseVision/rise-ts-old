import { Transaction } from '../responses';
import { cback } from '../base';

export interface Transactions {

  get<T>(id: string, callback?: cback<{ transaction: Transaction<T> }>)

  getList(query: { blockId?: string, senderId?: string, recipientId?: string, limit?: number, offset?: number, orderBy?: string }, callback?: cback<{ transactions: Transaction<any>[] }>)

  send(conf: { secret: string, amount: number, recipientId: string, publicKey?: string, secondSecret?: string }, callback?: cback<any>)

  getUnconfirmedTransactions(callback?: cback<{ transactions: Transaction<any>[] }>)

  getUnconfirmedTransaction(id: string, callback?: cback<{ transactions: Transaction<any>[] }>)
}