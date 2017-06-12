import { BaseApiResponse, cback } from '../base';

export interface Loader {

  status(callback?: cback<{ loaded: boolean, now: number, blocksCount: number }>): Promise<{ loaded: boolean, now: number, blocksCount: number } & BaseApiResponse>

  syncStatus(callback?: cback<{ syncing: boolean, blocks: number, height: number, broadhash: string, consensus: number }>): Promise<{ syncing: boolean, blocks: number, height: number, broadhash: string, consensus: number } & BaseApiResponse>
}