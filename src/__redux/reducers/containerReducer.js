import { CONTAINER_ADD, CONTAINER_REMOVE } from '../actions/types';
import random from 'randomstring';

const initState = [{
  dsid: random.generate(20)
}]

export const containerReducer = (state = initState, action) => {
  switch(action.type) {
    case CONTAINER_ADD:
      return [
        ...state, {
          dsid: action.payload.dsid
        }]
    case CONTAINER_REMOVE:
      if(state.length > 1)
        return state.filter(elem => elem.dsid !== action.payload.dsid)
      return state;
    default:
      return state;
  }
}
