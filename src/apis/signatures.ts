import { cback, rs } from '../types/base';
import { Signatures } from '../types/apis/Signatures';
/**
 * @private
 * @internal
 */
export const signatures = (rs: rs): Signatures => ({
  add(data: { secret: string, secondSecret?: string, publicKey?: string }, callback?: cback<any>) {
    return rs({
      path: '/signatures',
      method: 'PUT',
      data
    }, callback);
  }
});
