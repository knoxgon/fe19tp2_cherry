import { ADD_CLIENT_SUCCESS, ADD_CLIENT_FAILURE } from "../actions/types";


const initialState = {
  feedback: null
}

export const clientReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CLIENT_SUCCESS:
      return {
        ...state,
        feedback: null
      }
    case ADD_CLIENT_FAILURE:
      return {
        ...state,
        feedback: action.payload
      }
    default:
      return state;
  }
}
