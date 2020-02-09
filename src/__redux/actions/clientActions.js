import { ADD_CLIENT_SUCCESS, ADD_CLIENT_FAILURE } from "./types";

export const addClient = (info) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(info.email, info.password)
      .then((res) => {
        return firestore
          .collection('clients')
          .doc(res.user.uid)
          .set({
            firstname: info.firstname,
            lastname: info.lastname,
            role: info.role,
            company: info.company,
            subscription: {
              plan: info.plan,
              period: info.period
            }
          })
      }).then(() => {
        dispatch({
          type: ADD_CLIENT_SUCCESS
        })
      }).catch((err) => {
        dispatch({
          type: ADD_CLIENT_FAILURE, payload: err.message
        })
      })
  }
}
