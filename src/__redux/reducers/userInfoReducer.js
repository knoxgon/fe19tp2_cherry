import {
  USER_INFO_FETCH_SUCCESS,
  USER_INFO_FETCH_FAILURE
} from "../actions/types";

const initialState = {
  info: {
    logo: null,
    role: null,
    companyLightContainerColor: null,
    companyLightFontColor: null,
    companyLightNavbarColor: null,
    companyDarkContainerColor: null,
    companyDarkFontColor: null,
    companyDarkNavbarColor: null,
    companyLightSpecBg: null,
    companyLightSpecBord: null,
    companyDarkSpecBg: null,
    companyDarkSpecBord: null,
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
          companyLightContainerColor: action.payload.companyLightContainerColor,
          companyLightFontColor: action.payload.companyLightFontColor,
          companyLightNavbarColor: action.payload.companyLightNavbarColor,
          companyDarkContainerColor: action.payload.companyDarkContainerColor,
          companyDarkFontColor: action.payload.companyDarkFontColor,
          companyDarkNavbarColor: action.payload.companyDarkNavbarColor,
          companyLightSpecBg: action.payload.companyLightSpecBg,
          companyLightSpecBord: action.payload.companyLightSpecBord,
          companyDarkSpecBg: action.payload.companyDarkSpecBg,
          companyDarkSpecBord: action.payload.companyDarkSpecBord,
          fullName: action.payload.fullName
        }
      };
    case USER_INFO_FETCH_FAILURE:
      return state;
    default:
      return state;
  }
};
