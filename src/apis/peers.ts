import { cback, rs } from '../types/base';
import { Peer, PeerState } from '../types/beans';
import { PeersAPI } from '../types/apis/PeersAPI';
/**
 * @private
 * @internal
 */
export const peers = (rs: rs): PeersAPI => ({
  getList(query: { state?: PeerState, os?: string, version?: string, limit?: number, offset?: number, orderBy?: string } = {}, callback?: cback<{ peers: Peer[] }>) {
    return rs({
      path: '/peers',
      params: {...query},
    }, callback);
  },

  getByIPPort(params: { ip: string, port: number }, callback?: cback<{ peer: Peer }>) {
    return rs({
      path: '/peers/get',
      params: {...params},

    }, callback);
  },

  version(callback?: cback<{ build: string, commit: string, version: string, minVersion: string }>) {
    return rs({
      path: '/peers/version',
    }, callback);
  },

});
