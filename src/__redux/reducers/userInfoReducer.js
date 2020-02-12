import {
  USER_INFO_FETCH_SUCCESS,
  USER_INFO_FETCH_FAILURE
} from "../actions/types";

const initialState = {
  info: {
    logo: null,
    role: null,
    companyColor: null
  }
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO_FETCH_SUCCESS:
      return {
        ...state,
        info: {
          logo: action.payload.imgurl,
          role: action.payload.role,
          companyColor: action.payload.companyColor
        }
      };
    case USER_INFO_FETCH_FAILURE:
      return {
        ...state,
        info: null
      };
    default:
      return state;
  }
};
