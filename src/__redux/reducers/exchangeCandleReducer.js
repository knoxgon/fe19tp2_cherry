import { FETCH_CANDLE_EXCHANGE_SUCCESS, FETCH_CANDLE_EXCHANGE_FAILURE, CONTAINER_REMOVE } from '../actions/types';

const initState = []


export const exchangeCandleReducer = (state = initState, action) => {
  switch(action.type) {
    case FETCH_CANDLE_EXCHANGE_SUCCESS:
      const index = state.findIndex(e => e.dsid === action.payload.dsid);
      if(index === -1) {
        return [
          ...state,
          {
            dsid: action.payload.dsid,
            status: action.payload.status,
            primary: {series: [{data: [...action.payload.primary]}]},
            alternate: {series: [{data: [...action.payload.alternate]}]}
          }
        ]
      } else {
        return state.map(elem => {
          if(elem.dsid === action.payload.dsid) {
            return {
              ...elem,
              dsid: elem.dsid,
              status: action.payload.status,
              primary: {series: [{data: [...action.payload.primary]}]},
              alternate: {series: [{data: [...action.payload.alternate]}]}
            }
          }
          return elem
        })
      }
    case FETCH_CANDLE_EXCHANGE_FAILURE:
      return state.map(elem => {
        if(elem.dsid === action.payload.dsid) {
          return {
              dsid: action.payload.dsid,
              status: action.payload.status
          }
        }
        return elem
      })
    case CONTAINER_REMOVE:
      return state.filter(elem => elem.dsid !== action.payload.dsid)
    default:
      return state;
  }
}
