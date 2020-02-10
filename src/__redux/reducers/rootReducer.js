import { authReducer } from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { clientReducer } from './clientReducer';
import { userInfoReducer } from './userInfoReducer';
import { EmployeeReducer } from './employeeReducer';

//Root reducer combiens multiple reducers for putting in to store
export const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  employee: EmployeeReducer,
  userinfo: userInfoReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
