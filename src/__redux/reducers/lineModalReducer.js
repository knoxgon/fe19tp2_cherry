import { LINE_MODAL_TOGGLE } from '../actions/types';

const initState = {
  toggle: false
}


export const lineModalReducer = (state = initState, action) => {
  switch(action.type) {
    case LINE_MODAL_TOGGLE:
      return {
        ...state,
        toggle: !state.toggle
      }
    default:
      return state;
  }
}
