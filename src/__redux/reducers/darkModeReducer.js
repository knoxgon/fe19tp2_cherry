import { DARKMODE_TOGGLE, USER_COLOR_PREP } from '../actions/types';
const initialState = {
	toggle: JSON.parse(localStorage.getItem('DarkMode')),
	lightColors: {},
	darkColors: {},
	activeTheme: {}
}

export const darkModeReducer = (state = initialState, action) => {
	switch (action.type) {
		case DARKMODE_TOGGLE:
			const isDarkMode = !state.toggle
			const theme = isDarkMode ? state.darkColors : state.lightColors
			return {
				...state,
				toggle: isDarkMode,
				activeTheme: theme
			}
		case USER_COLOR_PREP:
			const activeTheme = state.toggle ? {
				contColor: action.payload.companyDarkContainerColor,
				fontColor: action.payload.companyDarkFontColor,
				navColor: action.payload.companyDarkNavbarColor,
				swbgColor: action.payload.companyDarkSpecBg,
				swbrColor: action.payload.companyDarkSpecBord,
				graphColor: action.payload.companyDarkGraphColor
			} : {
				contColor: action.payload.companyLightContainerColor,
				fontColor: action.payload.companyLightFontColor,
				navColor: action.payload.companyLightNavbarColor,
				swbgColor: action.payload.companyLightSpecBg,
				swbrColor: action.payload.companyLightSpecBord,
				graphColor: action.payload.companyLightGraphColor
				
			};
			return {
				...state,
				activeTheme: activeTheme,
				lightColors: { 
					contColor: action.payload.companyLightContainerColor,
					fontColor: action.payload.companyLightFontColor,
					navColor: action.payload.companyLightNavbarColor,
					swbgColor: action.payload.companyLightSpecBg,
					swbrColor: action.payload.companyLightSpecBord,
					graphColor: action.payload.companyLightGraphColor
				},
				darkColors: {
					contColor: action.payload.companyDarkContainerColor,
					fontColor: action.payload.companyDarkFontColor,
					navColor: action.payload.companyDarkNavbarColor,
					swbgColor: action.payload.companyDarkSpecBg,
					swbrColor: action.payload.companyDarkSpecBord,
					graphColor: action.payload.companyDarkGraphColor
				}
			}
		default:
			return state;
	}
}
