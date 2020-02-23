import { FETCH_EARNING_SURPRISES_SUCCESS, FETCH_EARNING_SURPRISES_FAILURE } from './types';
import { containerCreate } from './containerActions';
import Axios from 'axios';
import { fireLineModal } from './modalActions';

export const surpriseEarnings = (symbol) => {
  return (dispatch, getState) => {
    Axios(`https://finnhub.io/api/v1/stock/earnings?symbol=${symbol.value}&token=bp3cl47rh5r9d7scmmd0`)
    .then(result => {
      if(result.data.length === 0) {
        throw new Error('No company records were found')
      }
      const actual = result.data.map(e => e.actual);
      const estimate = result.data.map(e => e.estimate);
      const period = result.data.map(e => e.period);
      
      dispatch(containerCreate())
      let containerId = getState().containers[getState().containers.length - 1].dsid
      dispatch(fireLineModal())
      dispatch({
        type: FETCH_EARNING_SURPRISES_SUCCESS,
        payload: {
          dsid: containerId,
          series: [
            {name: 'Actual', actual: actual.reverse()},
            {name: 'Estimate', estimate: estimate.reverse()},
          ],
          period: period.reverse(),
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
