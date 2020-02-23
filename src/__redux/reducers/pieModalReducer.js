import { PIE_MODAL_TOGGLE } from '../actions/types';

const initState = {
  toggle: false
}

export const pieModalReducer = (state = initState, action) => {
  switch(action.type) {
    case PIE_MODAL_TOGGLE:
      return {
        ...state,
        toggle: !state.toggle
      }
    default:
      return state;
  }
}
