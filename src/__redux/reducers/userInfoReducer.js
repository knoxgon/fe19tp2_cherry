import {
  USER_INFO_FETCH_SUCCESS,
  USER_INFO_FETCH_FAILURE
} from "../actions/types";

const initialState = {
  info: {
    logo: null,
    role: null,
    companyColor: null,
    fullName: null
  }
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO_FETCH_SUCCESS:
      return {
        info: {
          logo: action.payload.imgurl,
          role: action.payload.role,
          companyColor: action.payload.companyColor,
          fullName: action.payload.fullName
        }
      };
    case USER_INFO_FETCH_FAILURE:
      return state;
    default:
      return state;
  }
};
