import { Transaction } from '../responses';
import { BaseApiResponse, cback } from '../base';

export interface TransactionsAPI {

  get<T>(id: string, callback?: cback<{ transaction: Transaction<T> }>): Promise<{ transaction: Transaction<T> } & BaseApiResponse>

  getList(query: { blockId?: string, senderId?: string, recipientId?: string, limit?: number, offset?: number, orderBy?: string }, callback?: cback<{ transactions: Transaction<any>[] }>): Promise<{ transactions: Transaction<any>[] } & BaseApiResponse>

  send(conf: { secret: string, amount: number, recipientId: string, publicKey?: string, secondSecret?: string }, callback?: cback<any>): Promise<any>

  getUnconfirmedTransactions(callback?: cback<{ transactions: Transaction<any>[] }>): Promise<{ transactions: Transaction<any>[] } & BaseApiResponse>

  getUnconfirmedTransaction(id: string, callback?: cback<{ transactions: Transaction<any>[] }>): Promise<{ transactions: Transaction<any>[] } & BaseApiResponse>
}