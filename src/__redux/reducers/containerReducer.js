import { CONTAINER_ADD, CONTAINER_REMOVE, CONTAINER_REMOVE_LAST } from '../actions/types';

const initState = []

export const containerReducer = (state = initState, action) => {
  switch(action.type) {
    case CONTAINER_ADD:
      return [
        ...state, {
        dsid: action.payload.dsid
      }]
    case CONTAINER_REMOVE:
      return state.filter(elem => elem.dsid !== action.payload.dsid)
    case CONTAINER_REMOVE_LAST:
      return state.shift()
    default:
      return state;
  }
}
