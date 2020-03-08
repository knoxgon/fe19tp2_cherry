import { FETCH_EARNING_SURPRISES_SUCCESS, FETCH_EARNING_SURPRISES_FAILURE } from './types';
import { containerCreate } from './containerActions';
import Axios from 'axios';
import { fireLineModal } from './modalActions';
import { months } from '../../__misc/dt';

export const surpriseEarnings = (symbol) => {
  return (dispatch, getState) => {
    Axios(`https://finnhub.io/api/v1/stock/earnings?symbol=${symbol.value}&token=bpib37nrh5rbgl0l9l70`)
    .then(result => {
      if(result.data.length === 0) {
        throw new Error('No company records were found')
      }
      const actual = result.data.map(e => e.actual);
      const estimate = result.data.map(e => e.estimate);
      const period = result.data.map(e => months[parseInt(e.period.slice(5, 7)) - 1] + '\'' + e.period.slice(2, 4));
      
      dispatch(containerCreate('l', 600, 336, 2000, 350, 300, 336))
      let containerId = getState().containers[getState().containers.length - 1].dsid
      dispatch(fireLineModal())
      dispatch({
        type: FETCH_EARNING_SURPRISES_SUCCESS,
        payload: {
          dsid: containerId,
          series: [
            {name: 'Actual', actual: actual.slice(0, 10).reverse(), type: 'line'},
            {name: 'Estimate', estimate: estimate.slice(0, 10).reverse(), type: 'column'},
          ],
          period: period.slice(0, 10).reverse(),
          status: 'ok',
          symcomp: symbol.label
        }
      })
    }).catch(err => {
      dispatch({
        type: FETCH_EARNING_SURPRISES_FAILURE
      })
    })
  }
}
