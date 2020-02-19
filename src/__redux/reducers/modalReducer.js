import { MODAL_ADD, MODAL_REMOVE } from '../actions/types';
import random from 'randomstring';

const initState = [{
  dsid: random.generate(20)
}]

export const modalReducer = (state = initState, action) => {
  switch(action.type) {
    case MODAL_ADD:
      return [
        ...state, {
          dsid: action.payload.dsid
        }]
    case MODAL_REMOVE:
      if(state.length > 1)
        return state.filter(elem => elem.dsid !== action.payload.dsid)
      return state;
    default:
      return state;
  }
}
