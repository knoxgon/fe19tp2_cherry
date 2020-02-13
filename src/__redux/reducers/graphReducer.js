import { GRAPH_LOADING_FAILURE, GRAPH_LOADING_SUCCESS } from "../actions/types";


const initialState = {
  feedback: null
}

export const graphReducer = (state = initialState, action) => {
  switch(action.type) {
    case GRAPH_LOADING_SUCCESS:
      return {
        ...state,
        feedback: null
      }
    case GRAPH_LOADING_FAILURE:
      return {
        ...state,
        feedback: action.payload
      }
    default:
      return state;
  }
}