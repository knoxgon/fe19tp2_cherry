import { QT, QTC, QTP, QTL } from './types'

export const falsifyAll = () => {
  return (dispatch, getState) => {
    dispatch({
      type: QT
    })
  }
}

export const switchQTC = () => {
  return (dispatch, getState) => {
    dispatch({
      type: QTC
    })
  }
}

export const switchQTP = () => {
  return (dispatch, getState) => {
    dispatch({
      type: QTP
    })
  }
}

export const switchQTL = () => {
  return (dispatch, getState) => {
    dispatch({
      type: QTL
    })
  }
}

export const HQToggler = () => {
  return (dispatch, getState) => {
    if(getState().qgtrigger.ctrigger || getState().qgtrigger.ptrigger || getState().qgtrigger.ltrigger)
      dispatch(falsifyAll())
    else
      dispatch(switchQTC())
  }
}
