import { DARKMODE_TOGGLE } from '../actions/types';
import { ThemeColorsDark, ThemeColorsLight } from '../../__config/theme';
const initialState = {
    toggle: JSON.parse(localStorage.getItem('DarkMode'))
}

export const darkModeReducer = (state = initialState, action) => {
    if (action.type === DARKMODE_TOGGLE) {
        const isDarkMode = !state.toggle
        const color = isDarkMode ? ThemeColorsDark : ThemeColorsLight
        return {
            ...state,
            toggle: isDarkMode,
            color

        }
    }
    return {
        ...state,
        toggle: !state.toggle,
        color: ThemeColorsLight
    }
}
