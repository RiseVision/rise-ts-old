import { BaseApi } from './baseApi';
import { BaseApiResponse, cback } from './response';

export class Signatures extends BaseApi {

  add(data:{secret:string, secondSecret?: string, publicKey?: string}, callback?: cback<any> ) {
    return this.rs({
      path: '/signatures',
      method: 'PUT',
      data
    }, callback);
  }


}
