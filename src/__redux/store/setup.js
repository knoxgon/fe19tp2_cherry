import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { firebase } from '../../__config/firebase';

//Pass in root reducer as parameter to createStore(rootReducer)
export const store = createStore(rootReducer, 
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase})
      ),
      reactReduxFirebase(firebase, { attachAuthIsReady: true })
    )
  );
