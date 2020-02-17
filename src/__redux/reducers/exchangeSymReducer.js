import { EXCHANGE_SYM_SUCCESS, EXCHANGE_SYM_FAILURE } from '../actions/types';

const initState = {
  selectedExSymGroup: null,
  selectedExSymMul: null,
  status: false
}


export const exchangeSymReducer = (state = initState, action) => {
  switch(action.type) {
    case EXCHANGE_SYM_SUCCESS:
      const remapSymGrp = action.payload.selectedExSymMul.map(a => {return {value: a.symbol, label: a.displaySymbol}})
      return {
        ...state,
        selectedExSymGroup: action.payload.selectedExSymGroup,
        selectedExSymMul: [...remapSymGrp],
        status: action.payload.status
      }
    case EXCHANGE_SYM_FAILURE:
      return {
        status: action.payload.status
      }
    default:
      return state;
  }
}
