import { cback } from '../base';
import { Peer } from '../responses';

export interface Peers {
  getList(query: { state?: string, os?: string, version?: string, limit?: number, offset?: number, orderBy?: string }, callback?: cback<{ peers: Peer[] }>)

  getByIPPort(params: { ip: string, port: number }, callback?: cback<{ peer: Peer }>)

  version(callback?: cback<{ build: string, commit: string, version: string, minVersion: string }>)
}