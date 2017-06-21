import { BaseApiResponse, cback } from '../base';
import { Block, BlockStatusResponse } from '../beans';

export interface BlocksAPI {

  getFeeSchedule(callback?: cback<{ fees: { send: number, vote: number, secondsignature: number, delegate: number, multisignature: number, dapp: number } }>)

  getFee(callback?: cback<{ fee: number }>): Promise<{ fee: number } & BaseApiResponse>

  getReward(callback?: cback<{ reward: number }>): Promise<{ reward: number } & BaseApiResponse>

  getSupply(callback?: cback<{ supply: number }>): Promise<{ supply: number } & BaseApiResponse>

  getStatus(callback?: cback<BlockStatusResponse>): Promise<BlockStatusResponse & BaseApiResponse>

  getHeight(callback?: cback<{ height: number }>): Promise<{ height: number } & BaseApiResponse>

  getNethash(callback?: cback<{ nethash: string }>): Promise<{ nethash: string } & BaseApiResponse>

  getMilestone(callback?: cback<{ milestone: number }>): Promise<{ milestone: number } & BaseApiResponse>

  getBlock(id: string, callback?: cback<{ block: Block }>): Promise<{ block: Block } & BaseApiResponse>

  getBlocks(query: { limit?: number, orderBy?: string, offset?: number, generatorPublicKey?: string, totalAmount?: number, totalFee?: number, reward?: number, previousBlock?: string, height?: number }, callback?: cback<{ blocks: Block[], count: number }>): Promise<{ blocks: Block[], count: number } & BaseApiResponse>
}