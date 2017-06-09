export interface BaseApiResponse {
  success: boolean
}

export type cback<T> = (err: Error | null, resp?: T & BaseApiResponse) => void

export type ApiPromise<T> = Promise<T & BaseApiResponse>

