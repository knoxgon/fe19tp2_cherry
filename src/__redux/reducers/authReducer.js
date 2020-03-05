import { SIGN_IN_SUCCESS, RESET_FEEDBACK, SIGN_IN_ERROR, SIGN_OUT, PASSWORD_RECOVERY_SUCCESS, PASSWORD_RECOVERY_FAILURE } from "../actions/types";

const initialState = {
  feedback: null
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        feedback: null
      }
    case SIGN_IN_ERROR:
      return {
        ...state,
        feedback: action.payload
      }
    case SIGN_OUT:
      return state;
    case PASSWORD_RECOVERY_SUCCESS:
      return {
        ...state,
        feedback: 'If the provided email is correct, you will receive an email within the next 5 minutes'
      }
    case PASSWORD_RECOVERY_FAILURE:
      return {
        ...state,
        feedback: 'If the provided email is correct, you will receive an email within the next 5 minutes'
      }
    case RESET_FEEDBACK:
      return {
        ...state,
        feedback: null
      }
    default:
      return state;
  }
}
