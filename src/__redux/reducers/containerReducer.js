import { CONTAINER_ADD, CONTAINER_REMOVE, CONTAINER_BREWSEND, CONTAINER_REMOVE_LAST } from '../actions/types';

const initState = []

export const containerReducer = (state = initState, action) => {
  switch(action.type) {
    case CONTAINER_ADD:
      return [
        ...state, {
        dsid: action.payload.dsid,
        type: action.payload.type,
        bsw: action.payload.bsw,
        bsh: action.payload.bsh,
        bsmw: action.payload.bsmw,
        bsmh: action.payload.bsmh,
        bslw: action.payload.bslw,
        bslh: action.payload.bslh
      }]
    case CONTAINER_REMOVE:
      return state.filter(elem => elem.dsid !== action.payload.dsid)
    case CONTAINER_REMOVE_LAST:
      return state.shift()
    case CONTAINER_BREWSEND:
      return state.map(obj => {
        if(obj.dsid === action.payload.dsid) {
          return { ...obj, bsw: obj.bsw + action.payload.bsw, bsh: obj.bsh + action.payload.bsh}
        } return obj;
      })
    default:
      return state;
  }
}
