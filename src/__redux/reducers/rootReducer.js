import { authReducer } from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';

//Root reducer combiens multiple reducers for putting in to store
export const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer
});
