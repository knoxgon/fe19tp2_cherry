import { MODAL_TOGGLE } from '../actions/types';

const initState = {
  toggle: false
}


export const modalReducer = (state = initState, action) => {
  switch(action.type) {
    case MODAL_TOGGLE:
      return {
        ...state,
        toggle: !state.toggle
      }
    default:
      return state;
  }
}
