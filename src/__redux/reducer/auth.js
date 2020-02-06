import { USER } from "../constant/action-types";

const initialState = {
  currentUser: null,
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case USER:
      return state;
    default:
      return initialState;
  }
}

export default reducer;
