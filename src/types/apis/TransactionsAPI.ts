import { Transaction, TransactionType } from '../beans';
import { BaseApiResponse, cback } from '../base';

export interface TransactionsAPI {

  get<T>(id: string, callback?: cback<{ transaction: Transaction<T> }>): Promise<{ transaction: Transaction<T> } & BaseApiResponse>

  getList(query: {
    blockId?: string, "and:blockId"?: string,
    type?: TransactionType, "and:type"?: TransactionType,
    senderId?: string, "and:senderId"?: string,
    recipientId?: string, "and:recipientId"?: string,
    fromHeight?: number, "and:fromHeight"?: number,
    toHeight?: number, "and:toHeight"?: number,
    fromUnixTime?: number, "and:fromUnixTime"?: number,
    toUnixTime?: number, "and:toUnixTime"?: number,
    limit?: number, offset?: number, orderBy?: string, }, callback?: cback<{ transactions: (Transaction<any> & {height:number, blockId: string})[] }>): Promise<{ transactions: (Transaction<any> & {height:number, blockId: string})[] } & BaseApiResponse>

  count(callback?: cback<{ confirmed: number, multisignature: number, unconfirmed: number, queued: number }>): Promise<{ confirmed: number, multisignature: number, unconfirmed: number, queued: number } & BaseApiResponse>

  send(conf: { secret: string, amount: number, recipientId: string, publicKey?: string, secondSecret?: string }, callback?: cback<{ transactionId: string }>): Promise<{ transactionId: string } & BaseApiResponse>

  getUnconfirmedTransactions(callback?: cback<{ transactions: Transaction<any>[] }>): Promise<{ transactions: Transaction<any>[] } & BaseApiResponse>

  getUnconfirmedTransaction(id: string, callback?: cback<{ transactions: Transaction<any>[] }>): Promise<{ transactions: Transaction<any>[] } & BaseApiResponse>
}
