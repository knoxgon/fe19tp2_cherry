import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT, PASSWORD_RECOVERY_SUCCESS, PASSWORD_RECOVERY_FAILURE } from "./types"


export const signin = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: SIGN_IN_SUCCESS
        })
      })
      .catch(fail => {
        dispatch({
          type: SIGN_IN_ERROR,
          payload: fail.message
        })
      });
  }
}

export const signout = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    firebase.auth().signOut()
      .then(() => {
        dispatch({
          type: SIGN_OUT
        })
      })
  }
}


export const recoverPassword = (email) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        dispatch({
          type: PASSWORD_RECOVERY_SUCCESS,
          payload: 'Please check your email'
        })
      })
      .catch(fail => {
        dispatch({
          type: PASSWORD_RECOVERY_FAILURE,
          payload: fail.message
        })
      });
  }
}
