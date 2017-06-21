
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

export interface Block {
  id: string
  version: number
  timestamp: number
  height: number
  previousBlock: string
  numberOfTransactions: number
  totalAmount: number
  totalFee: number
  reward: number
  payloadLength: number
  payloadHash: string
  generatorPublicKey: string
  generatorId: string
  blockSignature: string
  confirmations: number
  totalForged: string
}


export interface Delegate {
  username: string
  address: string
  publicKey: string
  vote: string
  producedBlocks: number
  missedBlocks: number
  rate: number
  rank: number
  approval: number
  productivity: number
}


export type Account = {
  username: string
  address: string
  publicKey: string
  balance: string
}

export enum TransactionType {
  SEND = 0,
  SIGNATURE = 1,
  DELEGATE = 2,
  VOTE = 3,
  MULTI = 4,
  DAPP = 5,
  IN_TRANSFER = 6,
  OUT_TRANSFER = 7
}

export type Transaction<T> = {
  type: TransactionType
  amount: number
  senderPublicKey: string
  requesterPublicKey: string
  timestamp: number
  asset: T
  recipientId: string
  signature: string
  id: string
  fee: number
  senderId: string
  relays: number
  receivedAt: string
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
