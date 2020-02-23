import { FETCH_CANDLE_EXCHANGE_SUCCESS, FETCH_CANDLE_EXCHANGE_FAILURE, CONTAINER_REMOVE, FETCH_EARNING_SURPRISES_SUCCESS, FETCH_EARNING_SURPRISES_FAILURE } from '../actions/types';

const initState = []


export const exchangeCandleReducer = (state = initState, action) => {
  switch(action.type) {
    case FETCH_EARNING_SURPRISES_SUCCESS:
      if(state.findIndex(e => e.dsid === action.payload.dsid) === -1) {
        console.log(action.payload.series[1].estimate)
        return [
          ...state,
          {
            gtype: 'line',
            dsid: action.payload.dsid,
            status: action.payload.status,
            series: [{ name: action.payload.series[0].name, data: [...action.payload.series[0].actual]},
            {name: action.payload.series[1].name, data: [...action.payload.series[1].estimate]}],
            period: [...action.payload.period],
            symcomp: action.payload.symcomp
          }
        ]
      }
      return state;
    case FETCH_EARNING_SURPRISES_FAILURE:
      return state;
    case FETCH_CANDLE_EXCHANGE_SUCCESS:
      if(state.findIndex(e => e.dsid === action.payload.dsid)) {
        return [
          ...state,
          {
            gtype: 'candle',
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
              gtype: 'candle',
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
      return state;
    
    case CONTAINER_REMOVE:
      if(action.payload.dsid == null)
        return state;
      return state.filter(elem => elem.dsid !== action.payload.dsid)
    default:
      return state;
  }
}
