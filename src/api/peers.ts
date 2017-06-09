import { BaseApi } from './baseApi';
import { BaseApiResponse, cback } from './response';

export class Peers extends BaseApi {
  getList(query:{state?:string, os?:string, version?:string, limit?:number, offset?:number, orderBy?:string} = {}, callback?: cback<{peers: Peer[]}>) {
    return this.requestSender({
      path: '/peers',
      qs: {...query},
    }, callback);
  }

  getByIPPort(params: {ip:string, port: number}, callback?: cback<{peer: Peer}>) {
    return this.requestSender({
      path: '/peers/get',
      qs: {...params},

    }, callback);
  }

  version( callback?: cback<{build: string, commit: string, version: string, minVersion: string}>) {
    return this.requestSender({
      path: '/peers/version',
    }, callback);
  }

}

export type Peer = {
  ip: string
  port: number
  state: number
  os: string
  version: string
  dappid: string
  broadhash: string
  height: string
  clock: string
  updated: number
  nonce: string
}