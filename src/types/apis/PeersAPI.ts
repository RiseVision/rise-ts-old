import { BaseApiResponse, cback } from '../base';
import { Peer, PeerState } from '../beans';

export interface PeersAPI {
  getList(query?: { state?: PeerState, os?: string, version?: string, limit?: number, offset?: number, orderBy?: string }, callback?: cback<{ peers: Peer[] }>): Promise<{ peers: Peer[] } & BaseApiResponse>

  getByIPPort(params: { ip: string, port: number }, callback?: cback<{ peer: Peer }>): Promise<{ peer: Peer } & BaseApiResponse>

  version(callback?: cback<{ build: string, commit: string, version: string, minVersion: string }>): Promise<{ build: string, commit: string, version: string, minVersion: string } & BaseApiResponse>
}