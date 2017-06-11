import { cback, rs } from '../types/base';
import { Dapps } from '../types/apis/Dapps';

/**
 * @private
 * @internal
 */
export const dapps = (rs: rs): Dapps => ({

  getCategories(callback?: cback<{ categories: { [k: string]: number } }>) {
    return rs({
      path: '/dapps/categories'
    }, callback)
  }
});