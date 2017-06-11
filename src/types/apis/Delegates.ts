import { cback } from '../base';
import { Delegate, Transaction } from '../responses';

export interface Delegates {
  enable(data: { secret: string, secondSecret?: string, username: string }, callback?: cback<Transaction<{ delegate: { username: string, publicKey: string } }>>)


  getList(query: { limit?: number, offset?: number, orderBy?: string }, callback?: cback<{ delegates: Delegate[], totalCount: number }>)

  getByUsername(username: string, callback?: cback<{ delegate: Delegate }>)

  getByPublicKey(publicKey: string, callback?: cback<{ delegate: Delegate }>)

  getByKeyVal(key: keyof Delegate, value: string, callback?: cback<{ delegate: Delegate }>)

  getVoters(publicKey: string, callback?: cback<{ accounts: Account[] }>)

  toggleForging(obj: { secret: string, enable: boolean }, callback?: cback<{ address: string }>)

  getForgedByAccount(publicKey: string, callback?: cback<{ fees: string, rewards: string, forged: string }>)
}