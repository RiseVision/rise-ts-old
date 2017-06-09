import { BaseApi } from './baseApi';
import { BaseApiResponse, cback } from './response';

export class Signatures extends BaseApi {

  add(conf:{secret:string, secondSecret?: string, publicKey?: string}, callback?: cback<any> ) {
    return this.requestSender({
      path: '/signatures',
      method: 'PUT',
      body: {...conf}
    }, callback);
  }


}
