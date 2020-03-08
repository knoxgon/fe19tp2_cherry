import { FETCH_TICKRATE_SUCCESS, FETCH_TICKRATE_FAILURE, FETCH_TICKRATE_UPDATE_SUCCESS, FETCH_TICKRATE_UPDATE_FAILURE } from './types';
import { containerCreate } from './containerActions';
import Axios from 'axios';
import { fireAreaModal } from './modalActions';
import { year50, year5, year1, month6, month1, day5, currentTime } from '../../__misc/dt';

export const tick = (compname) => {
  return (dispatch, getState) => {
    if (!compname) {
      throw new Error('Please select a company')
    } else {
      Axios(`https://finnhub.io/api/v1/stock/candle?symbol=${compname.value}&resolution=60&from=${month1()}&to=${currentTime()}&token=bpib37nrh5rbgl0l9l70`)
      .then(result => {
        const data = result.data.c.map((a, i) => Array.of(result.data.t[i] * 1000, a))
        dispatch(containerCreate('t', 300, 336, 2000, 350, 300, 336))
        let containerId = getState().containers[getState().containers.length - 1].dsid
        dispatch(fireAreaModal())
        dispatch({
          type: FETCH_TICKRATE_SUCCESS,
          payload: {
            dsid: containerId,
            data,
            status: 'ok',
            compname: compname
          }
        })
      }).catch(err => {
        dispatch({
          type: FETCH_TICKRATE_FAILURE
        })
      })
    }
  }
}

export const tickUpdate = (id, compname, interval) => {
  return (dispatch, getState) => {
    if (!compname) {
      throw new Error('Please select a company')
    } else {
      let per = day5();
      let resolut = '60';
      switch(interval) {
        case 'y50': per = year50(); resolut = 'W'; break;
        case 'y5': per = year5(); resolut = 'W'; break;
        case 'y1': per = year1(); resolut = 'D'; break;
        case 'm6': per = month6(); resolut = 'D'; break;
        case 'm1': per = month1(); resolut = 'D'; break;
        case 'd5': per = day5(); resolut = '30'; break;
        default: per = day5(); resolut = '30'; break;
      }
      Axios(`https://finnhub.io/api/v1/stock/candle?symbol=${compname.value}&resolution=${resolut}&from=${per}&to=${currentTime()}&token=bpib37nrh5rbgl0l9l70`)
      .then(result => {
        if(result.data.s !== 'ok') throw new Error('No record available')
        const data = result.data.c.map((a, i) => Array.of(result.data.t[i] * 1000, a))
        let containerId = getState().containers.find(ctr => ctr.dsid === id).dsid
        dispatch({
          type: FETCH_TICKRATE_UPDATE_SUCCESS,
          payload: {
            dsid: containerId,
            data,
            status: result.data.s,
            compname: compname
          }
        })
      }).catch(err => {
        dispatch({
          type: FETCH_TICKRATE_UPDATE_FAILURE
        })
      })
    }
  }
}

