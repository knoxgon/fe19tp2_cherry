import { CANDLE_MODAL_TOGGLE, LINE_MODAL_TOGGLE, PIE_MODAL_TOGGLE, AREA_MODAL_TOGGLE } from './types'


export const fireCandleModal = () => {
  return (dispatch, getState) => {
    dispatch({
      type: CANDLE_MODAL_TOGGLE
    })
  }
}

export const fireLineModal = () => {
  return (dispatch, getState) => {
    dispatch({
      type: LINE_MODAL_TOGGLE
    })
  }
}

export const firePieModal = () => {
  return (dispatch, getState) => {
    dispatch({
      type: PIE_MODAL_TOGGLE
    })
  }
}

export const fireAreaModal = () => {
  return (dispatch, getState) => {
    dispatch({
      type: AREA_MODAL_TOGGLE
    })
  }
}
