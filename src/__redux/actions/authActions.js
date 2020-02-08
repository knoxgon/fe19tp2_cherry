import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT } from "./types"



export const signin = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
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
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut()
      .then(() => {
        dispatch({
          type: SIGN_OUT
        })
      })
  }
}