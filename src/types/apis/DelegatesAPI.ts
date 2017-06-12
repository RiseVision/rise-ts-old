import { BaseApiResponse, cback } from '../base';
import { Delegate, Transaction } from '../responses';

export interface DelegatesAPI {
  enable(data: { secret: string, secondSecret?: string, username: string }, callback?: cback<Transaction<{ delegate: { username: string, publicKey: string } }>>): Promise<Transaction<{ delegate: { username: string, publicKey: string } }> & BaseApiResponse>

  getList(query: { limit?: number, offset?: number, orderBy?: string }, callback?: cback<{ delegates: Delegate[], totalCount: number }>): Promise<{ delegates: Delegate[], totalCount: number } & BaseApiResponse>

  getByUsername(username: string, callback?: cback<{ delegate: Delegate }>): Promise<{ delegate: Delegate } & BaseApiResponse>

  getByPublicKey(publicKey: string, callback?: cback<{ delegate: Delegate }>): Promise<{ delegate: Delegate } & BaseApiResponse>

  getByKeyVal(key: keyof Delegate, value: string, callback?: cback<{ delegate: Delegate }>): Promise<{ delegate: Delegate } & BaseApiResponse>

  getVoters(publicKey: string, callback?: cback<{ accounts: Account[] }>): Promise<{ accounts: Account[] } & BaseApiResponse>

  toggleForging(obj: { secret: string, enable: boolean }, callback?: cback<{ address: string }>): Promise<{ address: string } & BaseApiResponse>

  getForgedByAccount(publicKey: string, callback?: cback<{ fees: string, rewards: string, forged: string }>): Promise<{ fees: string, rewards: string, forged: string } & BaseApiResponse>

  getNextForgers(callback?: cback<{currentBlock: number, currentBlockSlot: number, currentSlot: number, delegates: string[]}>): Promise<{currentBlock: number, currentBlockSlot: number, currentSlot: number, delegates: string[]} & BaseApiResponse>
}