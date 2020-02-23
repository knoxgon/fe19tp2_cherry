import { CANDLE_MODAL_TOGGLE, LINE_MODAL_TOGGLE, PIE_MODAL_TOGGLE } from './types'


export const fireCandleModalAction = () => {
  return (dispatch, getState) => {
    dispatch({
      type: CANDLE_MODAL_TOGGLE
    })
  }
}

export const fireLineModalAction = () => {
  return (dispatch, getState) => {
    dispatch({
      type: LINE_MODAL_TOGGLE
    })
  }
}

export const firePieModalAction = () => {
  return (dispatch, getState) => {
    dispatch({
      type: PIE_MODAL_TOGGLE
    })
  }
}
