import { BaseApiResponse, cback } from './response';
import { BaseApi } from './baseApi';


export class Blocks extends BaseApi {

  getFeeSchedule(callback?: cback<{ fees: { send: number, vote: number, secondsignature: number, delegate: number, multisignature: number, dapp: number } }>) {
    return this.rs(
      {
        path: '/blocks/getFees'
      },
      callback);
  }

  getFee(callback?: cback<{ fee: number }>): Promise<BaseApiResponse & { fee: number }> {
    return this.rs(
      {
        path: '/blocks/getFee'
      },
      callback);
  }

  getReward(callback?: cback<{ reward: number }>) {
    return this.rs(
      {
        path: '/blocks/getReward'
      },
      callback);
  }


  getSupply(callback?: cback<{ supply: number }>) {
    return this.rs(
      {
        path: '/blocks/getSupply'
      },
      callback);
  }

  getStatus(callback?: cback<BlockStatusResponse>) {
    return this.rs(
      {
        path: '/blocks/getStatus'
      },
      callback);
  }

  getHeight(callback?: cback<{ height: number }>) {
    return this.rs(
      {
        path: '/blocks/getHeight'
      },
      callback);
  }

  getNethash(callback?: cback<{ nethash: string }>) {
    return this.rs(
      {
        path: '/blocks/getNethash'
      },
      callback);
  }

  getMilestone(callback?: cback<{ milestone: number }>) {
    return this.rs(
      {
        path: '/blocks/getMilestone'
      },
      callback);
  }

  getBlock(id: string, callback?: cback<{ block: Block }>) {
    return this.rs(
      {
        path: '/blocks/get',
        params: {id}
      },
      callback);
  }

  getBlocks(query: { [k: string]: any }, callback?: cback<{ blocks: Block[], count: number }>) {
    return this.rs(
      {
        path: '/blocks',
        params: {...query}
      },
      callback);
  }
}


export interface BlockStatusResponse {
  broadhash: string
  epoch: string
  height: number
  fee: number
  milestone: number
  nethash: string
  reward: number
  supply: number
}

export interface Block {
  id: string
  version: number
  timestamp: number
  height: number
  previousBlock: string
  numberOfTransactions: number
  totalAmount: number
  totalFee: number
  reward: number
  payloadLength: number
  payloadHash: string
  generatorPublicKey: string
  generatorId: string
  blockSignature: string
  confirmations: number
  totalForged: string
}

