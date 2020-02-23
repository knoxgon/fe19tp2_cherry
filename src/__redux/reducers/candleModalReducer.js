import { CANDLE_MODAL_TOGGLE } from '../actions/types';

const initState = {
  toggle: false
}

export const candleModalReducer = (state = initState, action) => {
  switch(action.type) {
    case CANDLE_MODAL_TOGGLE:
      return {
        ...state,
        toggle: !state.toggle
      }
    default:
      return state;
  }
}
