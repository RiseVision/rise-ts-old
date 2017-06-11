import { cback, rs } from '../types/base';
import { Loader } from '../types/apis/Loader';
/**
 * @private
 * @internal
 */
export const loader = (rs: rs): Loader => ({

  status(callback?: cback<{ loaded: boolean, now: number, blocksCount: number }>) {
    return rs({
        path: '/loader/status',
      },
      callback)
  },

  syncStatus(callback?: cback<{ syncing: boolean, blocks: number, height: number, broadhash: string, consensus: number }>) {
    return rs({
        path: '/loader/status/sync'
      },
      callback)
  }
});