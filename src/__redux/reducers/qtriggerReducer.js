import { QT, QTC, QTP, QTA, QTL } from '../actions/types';

const initState = {
  ctrigger: false,
  ptrigger: false,
  atrigger: false,
  ltrigger: false
}

export const qTriggerReducer = (state = initState, action) => {
  switch(action.type) {
    case QTC:
      return {
        ctrigger: true,
        ptrigger: false,
        atrigger: false,
        ltrigger: false
      }
    case QTP:
      return {
        ctrigger: false,
        ptrigger: true,
        atrigger: false,
        ltrigger: false
      }
    case QTA:
      return {
        ctrigger: false,
        ptrigger: false,
        atrigger: true,
        ltrigger: false
      }
    case QTL:
      return {
        ctrigger: false,
        ptrigger: false,
        atrigger: false,
        ltrigger: true
      }
    case QT:
      return initState;
    default:
      return state;
  }
}
