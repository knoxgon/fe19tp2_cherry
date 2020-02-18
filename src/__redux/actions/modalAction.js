import { MODAL_ADD, MODAL_REMOVE } from './types';
import random from 'randomstring';


export const modalCreate = () => {
  return (dispatch, getState) => {
    dispatch({
      type: MODAL_ADD,
      payload: {
        dsid: random.generate(20)
      }
    })
  } 
}

export const modalClose = (dsid) => {
  return (dispatch, getState) => {
    dispatch({
      type: MODAL_REMOVE,
      payload: {
        dsid: dsid
      }
    })
  } 
}
