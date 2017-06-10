import { BaseApiResponse, cback } from './response';
import * as querystring from 'querystring';
import { BaseApi } from './baseApi';

export class Delegates extends BaseApi {

  enable(data: { secret: string, secondSecret?: string, username: string }, callback?: cback<Transaction<{ delegate: { username: string, publicKey: string } }>>) {
    return this.rs(
      {
        path: '/delegates',
        method: 'PUT',
        data
      },
      callback
    );
  }

  getList(query: { limit?: number, offset?: number, orderBy?: string } = {}, callback?: cback<{ delegates: Delegate[], totalCount: number }>) {
    return this.rs(
      {
        path: `/delegates?${querystring.stringify(query)}`,
      },
      callback
    )
  }

  getByUsername(username:string, callback?:cback<{delegate:Delegate}>) {
    return this.getByKeyVal('username', username, callback);
  }

  getByPublicKey(publicKey:string, callback?:cback<{delegate:Delegate}>) {
    return this.getByKeyVal('publicKey', publicKey, callback);
  }

  getByKeyVal(key: keyof Delegate, value: string, callback?: cback<{ delegate: Delegate }>) {
    const query = {};
    query[key] = value;
    return this.rs(
      {
        path: `/delegates/get?${querystring.stringify(query)}`
      },
      callback
    );
  }

  getVoters(publicKey: string, callback?: cback<{ accounts: Account[] }>) {
    return this.rs(
      {
        path: `/delegates/voters?publicKey=${publicKey}`
      },
      callback
    );
  }

  toggleForging(obj: { secret: string, enable: boolean }, callback?: cback<{ address: string }>) {
    return this.rs(
      {
        path: `/delegates/forging/${obj.enable ? 'enable' : 'disable'}`,
        data: {
          secret: obj.secret
        },
        method: 'POST'
      },
      callback
    )
  }

  getForgedByAccount(publicKey: string, callback?: cback<{ fees: string, rewards: string, forged: string }>) {
    return this.rs(
      {
        path: `/delegates/forging/getForgedByAccount`,
        params: {
          generatorPublicKey: publicKey
        }
      },
      callback
    )
  }
}

export type Account = {
  username: string
  address: string
  publicKey: string
  balance: string
}

export type Delegate = {
  username: string,
  address: string,
  publicKey: string,
  vote: string,
  producedBlocks: number,
  missedblocks: number,
  rate: number,
  rank: number,
  approval: number,
  productivity: number
}
export type Transaction<T> = {
  type: number
  amount: number
  senderPublicKey: string
  requesterPublicKey: string
  timestamp: number
  asset: T
  recipientId: string
  signature: string
  id: string
  fee: number
  senderId: string
  relays: number
  receivedAt: string
}

