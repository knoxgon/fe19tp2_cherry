import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { firebase } from '../../__config/firebase';

export const store = createStore(rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase, { useFirestoreForProfile: true, userProfile: 'clients', attachAuthIsReady: true }),
    reduxFirestore(firebase)
  )
);
