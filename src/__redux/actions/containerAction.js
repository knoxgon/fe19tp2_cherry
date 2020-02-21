import { CONTAINER_ADD, CONTAINER_REMOVE } from './types';
import random from 'randomstring';


export const containerCreate = () => {
  return (dispatch, getState) => {
    dispatch({
      type: CONTAINER_ADD,
      payload: {
        dsid: random.generate(20)
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
