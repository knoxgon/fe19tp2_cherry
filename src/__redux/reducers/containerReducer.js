import { CONTAINER_ADD, CONTAINER_BMT, CONTAINER_REMOVE, CONTAINER_BREWSEND, CONTAINER_REMOVE_LAST } from '../actions/types';

const initState = []

export const containerReducer = (state = initState, action) => {
  switch(action.type) {
    case CONTAINER_ADD:
      return [
        ...state, {
        dsid: action.payload.dsid,
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
    case CONTAINER_BMT:
      const result = Array.from(state);
      const [removed] = result.splice(action.payload.b, 1);
      result.splice(action.payload.d, 0, removed);
      return result;
    default:
      return state;
  }
}
