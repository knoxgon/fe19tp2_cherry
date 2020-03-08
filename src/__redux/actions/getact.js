import { gensym } from '../../__misc/sc/';
import { GLOBAL_TYPE_SUCCESS } from './types';

export const getactAction = () => {
  return (dispatch, getState) => {
    if(!getState().comps.cmp) {
      dispatch ({
        type: GLOBAL_TYPE_SUCCESS,
        payload:  {
          comps: gensym
        }
      })
    }
  }
}
