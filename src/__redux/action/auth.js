import firebase from '../../config/firebase';
import { SIGNIN_FAILURE } from '../constant/action-types';

export const signin = (email, password, next) => async dispatch => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    dispatch({
      type: SIGNIN_SUCCESS
    });
    next();
  })
  .catch(fail => {
    dispatch({
      type: SIGNIN_FAILURE,
      payload: fail.message
    });
  });
}
