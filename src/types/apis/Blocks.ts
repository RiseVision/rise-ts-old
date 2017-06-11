import { cback } from '../base';
import { Block, BlockStatusResponse } from '../responses';

export interface Blocks {

  getFeeSchedule(callback?: cback<{ fees: { send: number, vote: number, secondsignature: number, delegate: number, multisignature: number, dapp: number } }>)

  getFee(callback?: cback<{ fee: number }>)

  getReward(callback?: cback<{ reward: number }>)


  getSupply(callback?: cback<{ supply: number }>)

  getStatus(callback?: cback<BlockStatusResponse>)

  getHeight(callback?: cback<{ height: number }>)

  getNethash(callback?: cback<{ nethash: string }>)

  getMilestone(callback?: cback<{ milestone: number }>)

  getBlock(id: string, callback?: cback<{ block: Block }>)

  getBlocks(query: { [k: string]: any }, callback?: cback<{ blocks: Block[], count: number }>)
}