export interface BlockStatusResponse {
  broadhash: string
  epoch: string
  height: number
  fee: number
  milestone: number
  nethash: string
  reward: number
  supply: number
}

export interface BaseBlock {
  id: string
  height: number
  blockSignature: string
  generatorPublicKey: string
  numberOfTransactions: number
  payloadHash: string
  payloadLength: number
  previousBlock: string
  timestamp: number
  totalAmount: number
  totalFee: number
  reward: number
  version: number


}

export interface ForgedBlock extends BaseBlock {
  transactions: BaseTransaction<any>[]
}

export interface Block extends BaseBlock {
  confirmations: number
  generatorId: string
  totalForged: string
}


export interface Delegate {
  username: string
  address: string
  publicKey: string
  vote: string
  producedblocks: number
  missedblocks: number
  rate: number
  rank: number
  approval: number
  productivity: number
}

export type Account = {
  address: string,
  unconfirmedBalance: string,
  balance: string,
  publicKey: string,
  unconfirmedSignature: 0 | 1,
  secondSignature: 0 | 1,
  secondPublicKey: string,
  multisignatures: string[],
  u_multisignatures: string[]
}

export enum TransactionType {
  SEND         = 0,
  SIGNATURE    = 1,
  DELEGATE     = 2,
  VOTE         = 3,
  MULTI        = 4,
  DAPP         = 5,
  IN_TRANSFER  = 6,
  OUT_TRANSFER = 7
}

export type BaseTransaction<T> = {
  type: TransactionType
  amount: number
  senderPublicKey: string
  requesterPublicKey?: string
  timestamp: number
  asset: T
  recipientId: string
  signature: string
  id: string
  fee: number
}
export type Transaction<T> = BaseTransaction<T> & {
  senderId: string
  relays: number
  receivedAt: string
}

export type MultiSigTransaction<T> = BaseTransaction<T> & {
  signatures: string[]
}

export type Peer = {
  ip: string
  port: number
  state: PeerState
  os: string
  version: string
  dappid: string
  broadhash: string
  height: number
  clock: string
  updated: number
  nonce: string
}

export enum PeerState {
  BANNED       = 0,
  DISCONNECTED = 1,
  ACTIVE       = 2
}

export interface Signature {
  /**
   * Transaction ID
   */
  transaction: string,
  /**
   * Signature
   */
  signature: string
}