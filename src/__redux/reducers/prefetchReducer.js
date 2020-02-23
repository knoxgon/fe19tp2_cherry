import { PREFETCH_RECOMMENTATION_TRENDS_FAILURE, PREFETCH_RECOMMENTATION_TRENDS_SUCCESS } from '../actions/types';

const initState = {}

export const prefetchReducer = (state = initState, action) => {
  switch(action.type) {
    case PREFETCH_RECOMMENTATION_TRENDS_SUCCESS:
      return {
        series: action.payload.data,
        periods: [...action.payload.periods],
        compname: action.payload.compname
      }
    case PREFETCH_RECOMMENTATION_TRENDS_FAILURE:
      return state;
    default:
      return state;
  }
}
