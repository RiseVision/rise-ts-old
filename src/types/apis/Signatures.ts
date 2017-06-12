import { cback } from '../base';

export interface Signatures {
  add(data: { secret: string, secondSecret?: string, publicKey?: string }, callback?: cback<any>): Promise<any>

}