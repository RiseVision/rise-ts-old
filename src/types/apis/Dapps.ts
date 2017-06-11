import { cback } from '../base';

export interface Dapps {
  getCategories(callback?:cback<{categories:{[k:string]:number}}>)

}