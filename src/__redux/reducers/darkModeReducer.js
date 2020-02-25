import { DARKMODE_TOGGLE } from '../actions/types';
import { ThemeColorsDark, ThemeColorsLight } from '../../__config/theme';
const initialState = {
    toggle: JSON.parse(localStorage.getItem('darkMode'))
}

export const darkModeReducer = (state = initialState, action) => {
    if (action.type === DARKMODE_TOGGLE) {
        const isDarkMode = !state.toggle
        const colors = isDarkMode ? ThemeColorsDark : ThemeColorsLight
        return {
            ...state,
            toggle: isDarkMode,
            colors: colors

        }
    }
    return state 
}
