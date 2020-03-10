import { FETCH_CANDLE_EXCHANGE_SUCCESS, FETCH_RECOMMENTATION_TRENDS_UPDATE, FETCH_CANDLE_EXCHANGE_FAILURE, CONTAINER_REMOVE, FETCH_EARNING_SURPRISES_SUCCESS, FETCH_EARNING_SURPRISES_FAILURE, FETCH_RECOMMENTATION_TRENDS_SUCCESS, FETCH_RECOMMENTATION_TRENDS_FAILURE, FETCH_TICKRATE_SUCCESS, FETCH_TICKRATE_FAILURE, FETCH_TICKRATE_UPDATE_SUCCESS, FETCH_TICKRATE_UPDATE_FAILURE } from '../actions/types';

const initState = []

export const centralReducer = (state = initState, action) => {
  switch(action.type) {
    case FETCH_RECOMMENTATION_TRENDS_SUCCESS:
      return [
        ...state,
        {
          gtype: 'pie',
          dsid: action.payload.dsid,
          series: [...action.payload.data],
          status: 'ok',
          period: action.payload.period,
          compname: action.payload.compname,
          rule: action.payload.recommendation
        }
      ]
    case FETCH_RECOMMENTATION_TRENDS_UPDATE:
      const objIndex = state.findIndex(obj => obj.dsid === action.payload.dsid && obj.gtype === 'pie');
      const updatedObj = {
        ...state[objIndex],
        series: [...action.payload.data],
        period: action.payload.period,
        compname: action.payload.compname,
        rule: action.payload.recommendation
      };
      return [
        ...state.slice(0, objIndex),
        updatedObj,
        ...state.slice(objIndex + 1),
      ]
    case FETCH_RECOMMENTATION_TRENDS_FAILURE:
      return state;
    case FETCH_EARNING_SURPRISES_SUCCESS:
      if(state.findIndex(e => e.dsid === action.payload.dsid) === -1) {
        return [
          ...state,
          {
            gtype: 'line',
            dsid: action.payload.dsid,
            status: action.payload.status,
            series: [{ type: action.payload.series[0].type, name: action.payload.series[0].name, data: [...action.payload.series[0].actual]},
            {type: action.payload.series[1].type, name: action.payload.series[1].name, data: [...action.payload.series[1].estimate]}],
            period: [...action.payload.period],
            symcomp: action.payload.symcomp
          }
        ]
      }
      return state;
    case FETCH_EARNING_SURPRISES_FAILURE:
      return state;
    case FETCH_CANDLE_EXCHANGE_SUCCESS:
      if(state.findIndex(e => e.dsid === action.payload.dsid)) {
        return [
          ...state,
          {
            gtype: 'candle',
            dsid: action.payload.dsid,
            status: action.payload.status,
            primary: {series: [{data: [...action.payload.primary]}]},
            alternate: {series: [{data: [...action.payload.alternate]}]},
            market: action.payload.market,
            currency: action.payload.currency
          }
        ]
      } else {
        return state.map(elem => {
          if(elem.dsid === action.payload.dsid) {
            return {
              ...elem,
              gtype: 'candle',
              dsid: elem.dsid,
              status: action.payload.status,
              primary: {series: [{data: [...action.payload.primary]}]},
              alternate: {series: [{data: [...action.payload.alternate]}]},
              market: action.payload.market,
              currency: action.payload.currency
            }
          }
          return elem
        })
      }
    case FETCH_CANDLE_EXCHANGE_FAILURE:
      return state;
    case FETCH_TICKRATE_SUCCESS:
      return [
        ...state, {
        gtype: 'area',
        dsid: action.payload.dsid,
        status: action.payload.status,
        series: [{data: [...action.payload.data], name: action.payload.compname.label}],
        latestPrice: action.payload.latestPrice,
        compname: action.payload.compname
      }]
    case FETCH_TICKRATE_UPDATE_SUCCESS:
      const tux = state.findIndex(obj => obj.dsid === action.payload.dsid);
      const optobj = {
        ...state[tux],
        series: [{data: [...action.payload.data], name: action.payload.compname.label}],
        status: action.payload.status,
        compname: action.payload.compname
      };
      return [
        ...state.slice(0, tux),
        optobj,
        ...state.slice(tux + 1),
      ]
    case FETCH_TICKRATE_UPDATE_FAILURE:
      return state;
    case FETCH_TICKRATE_FAILURE:
      return state;
    case CONTAINER_REMOVE:
      if(action.payload.dsid == null)
        return state;
      return state.filter(elem => elem.dsid !== action.payload.dsid)
    default:
      return state;
  }
}
