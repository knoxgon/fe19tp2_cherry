import { AREA_MODAL_TOGGLE } from '../actions/types';

const initState = {
  toggle: false
}

export const areaModalReducer = (state = initState, action) => {
  switch(action.type) {
    case AREA_MODAL_TOGGLE:
      return {
        ...state,
        toggle: !state.toggle
      }
    default:
      return state;
  }
}
