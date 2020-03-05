import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT, PASSWORD_RECOVERY_SUCCESS, PASSWORD_RECOVERY_FAILURE } from "../actions/types";

const initialState = {
  feedback: null
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case SIGN_IN_ERROR:
      return {
        ...state,
        authError: action.payload
      }
    case SIGN_OUT:
      return state;
    default:
      return state;
  }
}
