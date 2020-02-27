import { DARKMODE_TOGGLE } from '../actions/types';
import { ThemeColorsDark, ThemeColorsLight } from '../../__config/theme';
const initialState = {
	toggle: JSON.parse(localStorage.getItem('DarkMode')),
	color: { colors: JSON.parse(localStorage.getItem('DarkMode')) ? ThemeColorsDark.colors : ThemeColorsLight.colors }
}

export const darkModeReducer = (state = initialState, action) => {
	switch (action.type) {
		case DARKMODE_TOGGLE:
			const isDarkMode = !state.toggle
			const color = isDarkMode ? ThemeColorsDark : ThemeColorsLight
			return {
				...state,
				toggle: isDarkMode,
				color
			}
		default:
			return state;
	}
}
