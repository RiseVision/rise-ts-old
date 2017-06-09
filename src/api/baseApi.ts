import { BaseApiResponse, cback } from './response';

export class BaseApi {

  constructor(protected requestSender: <R>(obj: { qs?: any, path: string, method?: string, body?: any }, cback: cback<R>) => Promise<R & BaseApiResponse>) {
  }
}