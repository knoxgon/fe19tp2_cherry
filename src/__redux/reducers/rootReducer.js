import { authReducer } from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { clientReducer } from './clientReducer';
import { userInfoReducer } from './userInfoReducer';
import { EmployeeReducer } from './employeeReducer';
import { exchangeCandleReducer } from './exchangeCandleReducer';
import { exchangeTypeSymGrpReducer } from './exchangeTypeSymGrpReducer';
import { exchangeSymReducer } from './exchangeSymReducer';
import { containerReducer } from './containerReducer';
import { candleModalReducer } from './candleModalReducer';
import { lineModalReducer } from './lineModalReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  employee: EmployeeReducer,
  userinfo: userInfoReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  exchange: exchangeCandleReducer,
  exchangeSymbolGroup: exchangeTypeSymGrpReducer,
  exchangeSymbol: exchangeSymReducer,
  containers: containerReducer,
  candleModalToggler: candleModalReducer,
  lineModalToggler: lineModalReducer,
});
