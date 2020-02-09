import { USER_INFO_FETCH_SUCCESS, USER_INFO_FETCH_FAILURE } from "../actions/types";

const initialState = {
  info: null
}

export const userInfoReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_INFO_FETCH_SUCCESS:
      return {
        ...state,
        info: action.payload
      }
    case USER_INFO_FETCH_FAILURE:
      return {
        ...state,
        info: null
      }
    default:
      return state;
  }
}
