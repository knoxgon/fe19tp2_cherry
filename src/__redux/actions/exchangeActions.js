import { FETCH_CANDLE_EXCHANGE_FAILURE, FETCH_CANDLE_EXCHANGE_SUCCESS, EXCHANGE_TYPE_SUCCESS, EXCHANGE_TYPE_FAILURE, EXCHANGE_SYM_SUCCESS, EXCHANGE_SYM_FAILURE } from './types';
import {fxcm, oanda, forexcom, fxpro, icmarkets, icmtrader, octafx, pepperstone, fxpig } from '../../__misc/fx';
import { poloniex, bitmex, bittrex, kraken, bitfinex, huobi, hitbtc, binance, okex, gemini, zb, kucoin, coinbase } from '../../__misc/cc'
import Axios from 'axios';
import { containerCreate } from './containerActions';
import { fireCandleModal } from './modalActions';

export const exchangeCandleAction = (input) => {
  return (dispatch, getState) => {
    const { selectedPlatform, selectedSymbol, selectedResolution, intervalFrom, intervalTo } = input;
    Axios(`https://cors-anywhere.herokuapp.com/https://finnhub.io/api/v1/${selectedPlatform}/candle?symbol=${selectedSymbol.value}&resolution=${selectedResolution}&from=${intervalFrom}&to=${intervalTo}&token=bp3cl47rh5r9d7scmmd0`)
      .then((result) => {
        if(result.data == null) {
        }
        if(!result.headers['content-type'].includes('application/json')) {
          if(result.headers['content-type'].includes('text/html'))
            throw new Error('Please select a platform')
          else {
            throw new Error(result.data)
          }
        }
        const { c, h, l, o, t, s, v } = result.data;
        if(s === 'no_data') {
          throw new Error('No record found')
        }
        if(s === 'ok' && c == null && h == null && l == null && o == null && t == null) {
          throw new Error('Records are missing')
        }
        if ((s !== 'no_data') && c != null && h != null && l != null && o != null && t != null) {
          let concatObj = {};
          concatObj = { c_c: [...c], h_h: [...h], l_l: [...l], o_o: [...o], t_t: [...t], s_s: s }
          if (v) {
            Object.assign(concatObj, {v_v: [...v]});
          }
          return concatObj;
        } else {
          throw new Error(s)
        }
      })
      .then((mappedData) => {
        let primaryBatch = [];
        let alternateBatch = [];
        const timestamps = [...mappedData.t_t];
        timestamps.forEach((dt, i) => {
          primaryBatch.push({
            x: new Date(dt * 1000),
            y: [mappedData.o_o[i], mappedData.h_h[i], mappedData.l_l[i], mappedData.c_c[i]]
          })
          if (mappedData.v_v) {
            alternateBatch.push(mappedData.v_v[i])
          }
        });
        dispatch(containerCreate())
        let containerId = getState().containers[getState().containers.length - 1].dsid
        dispatch(fireCandleModal())

        // let containerId;
        // if(getState().containers.findIndex((e, ix) => e.dsid === getState().exchange[ix].dsid) === -1) {
        //   dispatch(containerCreate())
        //   containerId = getState().containers[getState().containers.length - 1].dsid
        // } else {
        //   const index = getState().containers.findIndex((e, ix) => e.dsid === getState().exchange[ix].dsid);
        //   containerId = getState().exchange[index].dsid
        // }
        dispatch({
          type: FETCH_CANDLE_EXCHANGE_SUCCESS,
          payload: {
            dsid: containerId,
            status: mappedData.s_s,
            primary: primaryBatch,
            alternate: alternateBatch
          }
        })
      })
      .catch(err => {
        dispatch({
          type: FETCH_CANDLE_EXCHANGE_FAILURE,
          payload: {
            status: err.message
          }
        })
      })
  }
}

export const exchangeTypeSymGrpAction = (input) => {
  return (dispatch, getState) => {
    switch(input) {
      case 'forex':
        dispatch ({
          type: EXCHANGE_TYPE_SUCCESS,
          payload:  {
            selectedPlatform: input,
            selectedExSymGroup: ["oanda", "fxcm", "forex.com", "octafx", "fxpig", "pepperstone", "icmtrader", "ic markets", "fxpro"],
            status: true
          }
        })
        break;
      case 'crypto':
        dispatch ({
          type: EXCHANGE_TYPE_SUCCESS,
          payload:  {
            selectedPlatform: input,
            selectedExSymGroup: ["POLONIEX", "Bitmex", "BITTREX", "KRAKEN", "BITFINEX", "COINBASE", "HUOBI", "HITBTC", "Binance", "OKEX", "GEMINI", "ZB", "KUCOIN"],
            status: true
          }
        })
        break;
      default:
        dispatch ({
          type: EXCHANGE_TYPE_FAILURE,
          payload: {
            status: false
          }
        })
        break;
    }
  }
}

export const exchangeSymAction = (input, exch) => {
  return (dispatch, getState) => {
    if(exch === 'forex') {
      switch(input) {
        case 'oanda':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: oanda,
              status: true
            }
          })
          break;
        case 'fxcm':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: fxcm,
              status: true
            }
          })
          break;
        case 'forex.com':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: forexcom,
              status: true
            }
          })
          break;
        case 'fxpro':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: fxpro,
              status: true
            }
          })
          break;
        case 'fxpig':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: fxpig,
              status: true
            }
          })
          break;
        case 'ic markets':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: icmarkets,
              status: true
            }
          })
          break;
        case 'icmtrader':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: icmtrader,
              status: true
            }
          })
          break;
        case 'octafx':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: octafx,
              status: true
            }
          })
          break;
        case 'pepperstone':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: pepperstone,
              status: true
            }
          })
          break;
        default:
          dispatch ({
            type: EXCHANGE_SYM_FAILURE,
            payload:  {
              status: false
            }
          })
          break;
      }
    } else if(exch === 'crypto') {
      switch(input) {
        case 'POLONIEX':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: poloniex,
              status: true
            }
          })
          break;
        case 'Bitmex':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: bitmex,
              status: true
            }
          })
          break;
        case 'BITTREX':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: bittrex,
              status: true
            }
          })
          break;
        case 'KRAKEN':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: kraken,
              status: true
            }
          })
          break;
        case 'BITFINEX':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: bitfinex,
              status: true
            }
          })
          break;
        case 'COINBASE':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: coinbase,
              status: true
            }
          })
          break;
        case 'HUOBI':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: huobi,
              status: true
            }
          })
          break;
        case 'HITBTC':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: hitbtc,
              status: true
            }
          })
          break;
        case 'Binance':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: binance,
              status: true
            }
          })
          break;
        case 'OKEX':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: okex,
              status: true
            }
          })
          break;
        case 'GEMINI':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: gemini,
              status: true
            }
          })
          break;
        case 'ZB':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: zb,
              status: true
            }
          })
          break;
        case 'KUCOIN':
          dispatch ({
            type: EXCHANGE_SYM_SUCCESS,
            payload:  {
              selectedExSymGroup: input,
              selectedExSymMul: kucoin,
              status: true
            }
          })
          break;
        default:
          dispatch ({
            type: EXCHANGE_SYM_FAILURE,
            payload:  {
              status: false
            }
          })
          break;
      }
    }
  }
}
