import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { reactReduxFirebase } from 'react-redux-firebase';
import reducers from '../reducer/index';
import firebase from '../../config/firebase';

const firebaseStore = compose(reactReduxFirebase(firebase))(
  createStore
);
const store = firebaseStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

export default store;
