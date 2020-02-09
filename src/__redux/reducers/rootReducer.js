import { authReducer } from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { clientReduder } from './clientReducer';
import { userInfoReducer } from './userInfoReducer';

//Root reducer combiens multiple reducers for putting in to store
export const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReduder,
  userinfo: userInfoReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
