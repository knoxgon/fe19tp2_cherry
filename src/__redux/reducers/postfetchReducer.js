import { PREFETCH_RECOMMENTATION_TRENDS_SUCCESS } from '../actions/types';

const initState = []

export const postfetchReducer = (state = initState, action) => {
  switch(action.type) {
    case PREFETCH_RECOMMENTATION_TRENDS_SUCCESS:
      const objIndex = state.findIndex(obj => obj.compname === action.payload.compname);
      if(objIndex === -1) {
        return [
          ...state, {
          series: action.payload.data,
          periods: [...action.payload.periods],
          compname: action.payload.compname
        }]
      }
      return state;
    default:
      return state;
  }
}
