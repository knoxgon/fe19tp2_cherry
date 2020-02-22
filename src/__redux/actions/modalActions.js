import { MODAL_TOGGLE } from './types'


export const fireCandleModalAction = () => {
  return (dispatch, getState) => {
    dispatch({
      type: MODAL_TOGGLE
    })
  }
}
