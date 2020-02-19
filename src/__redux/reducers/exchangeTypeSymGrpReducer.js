import { EXCHANGE_TYPE_SUCCESS, EXCHANGE_TYPE_FAILURE } from '../actions/types';

const initState = {
  selectedExchange: null,
  selectedExSymGroup: { value: null, label: null},
  status: false
}

export const exchangeTypeSymGrpReducer = (state = initState, action) => {
  switch(action.type) {
    case EXCHANGE_TYPE_SUCCESS:
      const remapSymGrp = action.payload.selectedExSymGroup.map(a => {return {value: a, label: a}})
      return {
        ...state,
        selectedExchange: action.payload.selectedExchange,
        selectedExSymGroup: [...remapSymGrp],
        status: action.payload.status
      }
      case EXCHANGE_TYPE_FAILURE:
        return {
          status: action.payload.status
      }
    default:
      return state;
  }
}
