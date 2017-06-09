import { BaseApi } from './baseApi';
import { BaseApiResponse, cback } from './response';

export class Loader extends BaseApi {
  status(callback?: cback<{loaded:boolean, now: number, blocksCount: number}>) {
    return this.requestSender({
        path: '/loader/status'
      },
      callback)
  }

  syncStatus(callback?: cback<{syncing:boolean, blocks: number, height: number, broadhash:string, consensus: number}>) {
    return this.requestSender({
        path: '/loader/status/sync'
      },
      callback)
  }
}