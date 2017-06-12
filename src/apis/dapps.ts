import { cback, rs } from '../types/base';
import { DappsAPI } from '../types/apis/DappsAPI';

/**
 * @private
 * @internal
 */
export const dapps = (rs: rs): DappsAPI => ({

  getCategories(callback?: cback<{ categories: { [k: string]: number } }>) {
    return rs({
      path: '/dapps/categories'
    }, callback)
  }
});