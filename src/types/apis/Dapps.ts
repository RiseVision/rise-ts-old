import { BaseApiResponse, cback } from '../base';

export interface Dapps {
  getCategories(callback?: cback<{ categories: { [k: string]: number } }>): Promise<{ categories: { [k: string]: number } } & BaseApiResponse>

}