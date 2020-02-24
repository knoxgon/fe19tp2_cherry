import { DARKMODE_TOGGLE } from './types'

export const darkModeToggler = () => {
    return (dispatch) => {
        dispatch({
            type: DARKMODE_TOGGLE
        })
    }
}

