import { FETCH_RECOMMENTATION_TRENDS_SUCCESS, FETCH_RECOMMENTATION_TRENDS_UPDATE, FETCH_RECOMMENTATION_TRENDS_FAILURE, PREFETCH_RECOMMENTATION_TRENDS_SUCCESS, PREFETCH_RECOMMENTATION_TRENDS_FAILURE } from './types';
import { containerCreate } from './containerActions';
import Axios from 'axios';
import { firePieModal } from './modalActions';
import { months } from '../../__misc/dt';

export const trendsPrefetch = (symbol) => {
  return (dispatch, getState) => {
    Axios(`https://finnhub.io/api/v1/stock/recommendation?symbol=${symbol.value}&token=bpib37nrh5rbgl0l9l70`)
    .then(result => {
      if(result.data.length === 0) {
        throw new Error('No company records were found')
      }
      const prepPeriods = result.data.map(el => ({value: el.period, label: months[parseInt(el.period.slice(5, 7)) - 1] + '/' + el.period.slice(0, 4)}));
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
        let recommendation = {act: 'Indecisive', color: "#A79289"}
        const totalbuy = procItem.buy + procItem.strongBuy
        const totalsell = procItem.sell + procItem.strongSell
        const totalhold = procItem.hold
        if((totalhold > totalbuy) && (totalhold > totalsell)) recommendation = {act: 'Hold', color: "#FDB62E"}
        else if((totalbuy > totalsell) && (totalbuy > totalhold)) recommendation = {act: 'Buy', color: "#1998F9"}
        else if((totalsell > totalbuy) && (totalsell > totalhold)) recommendation = {act: 'Sell', color: "#19E49F"}
        const data = Array.of(totalbuy, totalsell, totalhold)
        const parsedate = months[parseInt(period.slice(5, 7)) - 1] + '/' + period.slice(2, 4);
        dispatch(containerCreate('p', 300, 350, 400, 450, 250, 330))
        let containerId = getState().containers[getState().containers.length - 1].dsid
        dispatch(firePieModal())
        dispatch({
          type: FETCH_RECOMMENTATION_TRENDS_SUCCESS,
          payload: {
            dsid: containerId,
            data,
            period: parsedate,
            compname,
            recommendation
          }
        })
      }
    }
  }
}

export const trendspec = (dsid, compname, period) => {
  return (dispatch, getState) => {
    if(!period) {
      dispatch({
        type: FETCH_RECOMMENTATION_TRENDS_FAILURE,
        errMsg: 'Please select a period'
      })
    } else {
      const procItem = getState().postdata.find(el => el.compname === compname).series.find(ec => ec.period === period)
      if(!procItem) {
        dispatch({
          type: FETCH_RECOMMENTATION_TRENDS_FAILURE,
          errMsg: `No records found for ${period}`
        })
      } else {
        let recommendation = {act: 'Indecisive', color: "#A79289"};
        const totalbuy = procItem.buy + procItem.strongBuy
        const totalsell = procItem.sell + procItem.strongSell
        const totalhold = procItem.hold
        if((totalhold > totalbuy) && (totalhold > totalsell)) recommendation = {act: 'Hold', color: "#FDB62E"}
        else if((totalbuy > totalsell) && (totalbuy > totalhold)) recommendation = {act: 'Buy', color: "#1998F9"}
        else if((totalsell > totalbuy) && (totalsell > totalhold)) recommendation = {act: 'Sell', color: "#19E49F"}
        const data = Array.of(totalbuy, totalsell, totalhold)
        const parsedate = months[parseInt(period.slice(5, 7)) - 1] + '/' + period.slice(0, 4);
        dispatch({
          type: FETCH_RECOMMENTATION_TRENDS_UPDATE,
          payload: {
            dsid,
            data,
            period: parsedate,
            compname,
            recommendation
          }
        })
      }
    }
  }
}

