import { DARKMODE_TOGGLE } from '../actions/types';

const initialState = {
    toggle: JSON.parse(localStorage.getItem('darkMode')) === true
}

export const darkModeReducer = (state = initialState, action) => {
    if (action.type === DARKMODE_TOGGLE) {
        return {
            ...state,
            toggle: !state.toggle
        }
    }
    return state 
}
