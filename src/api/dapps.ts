import { BaseApiResponse, cback } from './response';
import * as querystring from 'querystring';
import { BaseApi } from './baseApi';

export class Dapps extends BaseApi {

  /**
   * Get Dapps categories.
   * @param callback
   * @returns {Promise<{categories:{[k:string]:number}}&BaseApiResponse>}
   */
  getCategories(callback?:cback<{categories:{[k:string]:number}}>) {
    return this.rs({
      path: '/dapps/categories'
    }, callback)
  }
}