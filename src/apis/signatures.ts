import { cback, rs } from '../types/base';
import { SignaturesAPI } from '../types/apis/SignaturesAPI';
/**
 * @private
 * @internal
 */
export const signatures = (rs: rs): SignaturesAPI => ({
  add(data: { secret: string, secondSecret: string, publicKey?: string }, callback?: cback<any>) {
    return rs({
      path: '/signatures',
      method: 'PUT',
      data
    }, callback);
  }
});
