import { USER_INFO_FETCH_SUCCESS, USER_INFO_FETCH_FAILURE } from "./types";


export const getInfo = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const userid = firebase.auth().currentUser.uid;
    firestore.collection('clients').doc(userid).get()
      .then((res) => {
        const { logo, role } = res.data();
        firebase.storage().ref(logo).getDownloadURL().then((imgurl) => {
          dispatch({
            type: USER_INFO_FETCH_SUCCESS,
            payload: {
              imgurl: imgurl,
              role: role
            }
          })
        })
      })
      .catch((err) => {
        dispatch({
          type: USER_INFO_FETCH_FAILURE,
          payload: null
        })
      })
  }
}
