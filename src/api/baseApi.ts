import { BaseApiResponse, cback } from './response';

export class BaseApi {

  constructor(protected rs: <R>(obj: { params?: any, path: string, method?: string, data?: any }, cback: cback<R>) => Promise<R & BaseApiResponse>) {
  }
}