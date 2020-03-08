import { authReducer } from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { clientReducer } from './clientReducer';
import { userInfoReducer } from './userInfoReducer';
import { EmployeeReducer } from './employeeReducer';
import { centralReducer } from './centralizedReducer';
import { exchangeTypeSymGrpReducer } from './exchangeTypeSymGrpReducer';
import { exchangeSymReducer } from './exchangeSymReducer';
import { containerReducer } from './containerReducer';
import { candleModalReducer } from './candleModalReducer';
import { lineModalReducer } from './lineModalReducer';
import { pieModalReducer } from './pieModalReducer';
import { prefetchReducer } from './prefetchReducer';
import { darkModeReducer } from './darkModeReducer';
import { qTriggerReducer } from './qtriggerReducer';
import { postfetchReducer } from './postfetchReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  employee: EmployeeReducer,
  userinfo: userInfoReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  central: centralReducer,
  predata: prefetchReducer,
  postdata: postfetchReducer,
  exchangeSymbolGroup: exchangeTypeSymGrpReducer,
  exchangeSymbol: exchangeSymReducer,
  containers: containerReducer,
  candleModalToggler: candleModalReducer,
  lineModalToggler: lineModalReducer,
  pieModalToggler: pieModalReducer,
  darkModeToggler: darkModeReducer,
  qgtrigger: qTriggerReducer
});
