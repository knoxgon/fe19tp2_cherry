import { QT, QTC, QTP, QTL } from '../actions/types';

const initState = {
  ctrigger: false,
  ptrigger: false,
  ltrigger: false
}

export const qTriggerReducer = (state = initState, action) => {
  switch(action.type) {
    case QTC:
      return {
        ctrigger: true,
        ptrigger: false,
        ltrigger: false
      }
    case QTP:
      return {
        ctrigger: false,
        ptrigger: true,
        ltrigger: false
      }
    case QTL:
      return {
        ctrigger: false,
        ptrigger: false,
        ltrigger: true
      }
    case QT:
      return initState;
    default:
      return state;
  }
}
