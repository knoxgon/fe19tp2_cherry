import { GET_USERS_FAILURE, GET_USERS_SUCCESS } from "../actions/types";

const initState = {}

export const adminReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_USERS_SUCCESS:
      return {
        users: [...action.payload.users]
      }
    case GET_USERS_FAILURE:
      return state;
    default:
      return state;
  }
}
