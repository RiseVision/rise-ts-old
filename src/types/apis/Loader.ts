import { cback } from '../base';

export interface Loader {
  status(callback?: cback<{ loaded: boolean, now: number, blocksCount: number }>);
  syncStatus(callback?: cback<{ syncing: boolean, blocks: number, height: number, broadhash: string, consensus: number }>)
}