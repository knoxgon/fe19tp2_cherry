import { GLOBAL_TYPE_SUCCESS } from '../actions/types';

const initState = []

export const compsReducer = (state = initState, action) => {
  switch(action.type) {
    case GLOBAL_TYPE_SUCCESS:
      return [{cmp: action.payload.comps}]
    default:
      return state;
  }
}
