import { CONTAINER_ADD, CONTAINER_REMOVE, CONTAINER_BMT, CONTAINER_BREWSEND } from './types';
import random from 'randomstring';

export const brewsend = (i, a, b, c, d) => {
  return (dispatch, getState) => {
    dispatch({
      type: CONTAINER_BREWSEND,
      payload: {
        dsid: i,
        bsw: a,
        bsh: b
      }
    })
  }
}

export const bmwhen = (a,c) => {
  return (dispatch, getState) => {
    dispatch({
      type: CONTAINER_BMT,
      payload: {
        b: a,
        d: c
      }
    })
  }
}

export const containerCreate = (t, w, h, mw, mh, lw, lh) => {
  return (dispatch, getState) => {
    dispatch({
      type: CONTAINER_ADD,
      payload: {
        dsid: random.generate(20),
        bsw: w,
        bsh: h,
        bsmw: mw,
        bsmh: mh,
        bslw: lw,
        bslh: lh
      }
    })
  } 
}

export const containerClose = (dsid) => {
  return (dispatch, getState) => {
    dispatch({
      type: CONTAINER_REMOVE,
      payload: {
        dsid: dsid
      }
    })
  } 
}
