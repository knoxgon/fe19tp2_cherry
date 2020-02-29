import { FETCH_RECOMMENTATION_TRENDS_SUCCESS, FETCH_RECOMMENTATION_TRENDS_FAILURE, PREFETCH_RECOMMENTATION_TRENDS_SUCCESS, PREFETCH_RECOMMENTATION_TRENDS_FAILURE } from './types';
import { containerCreate } from './containerActions';
import Axios from 'axios';
import { firePieModal } from './modalActions';

export const trendsPrefetch = (symbol) => {
  return (dispatch, getState) => {
    Axios(`https://finnhub.io/api/v1/stock/recommendation?symbol=${symbol.value}&token=bp3cl47rh5r9d7scmmd0`)
    .then(result => {
      if(result.data.length === 0) {
        throw new Error('No company records were found')
      }
      const prepPeriods = result.data.map(el => ({value: el.period, label: el.period}));
      dispatch({
        type: PREFETCH_RECOMMENTATION_TRENDS_SUCCESS,
        payload: {
          data: result.data,
          periods: prepPeriods,
          compname: symbol.label
        }
      })
    }).catch(err => {
      dispatch({
        type: PREFETCH_RECOMMENTATION_TRENDS_FAILURE
      })
    })
  }
}

export const trends = (period, compname) => {
  return (dispatch, getState) => {
    if(!period) {
      dispatch({
        type: FETCH_RECOMMENTATION_TRENDS_FAILURE,
        errMsg: 'Please select a period'
      })
    } else {
      const procItem = getState().predata.series.find(el => el.period === period)
      if(!procItem) {
        dispatch({
          type: FETCH_RECOMMENTATION_TRENDS_FAILURE,
          errMsg: `No records found for ${period}`
        })
      } else {
        const data = Array.of(procItem.buy, procItem.hold, procItem.sell, procItem.strongBuy, procItem.strongSell)
        dispatch(containerCreate('p', 200, 220, 300, 300, 200, 220))
        let containerId = getState().containers[getState().containers.length - 1].dsid
        dispatch(firePieModal())
        dispatch({
          type: FETCH_RECOMMENTATION_TRENDS_SUCCESS,
          payload: {
            dsid: containerId,
            data,
            period,
            compname
          }
        })
      }
    }
  }
}
