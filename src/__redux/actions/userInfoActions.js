import { USER_INFO_FETCH_SUCCESS, USER_INFO_FETCH_FAILURE } from "./types";

export const getInfo = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    if(!firebase.auth().currentUser) {
      throw new Error();
    } else {
      const userid = firebase.auth().currentUser.uid;
      firestore.collection("clients")
      .doc(userid)
      .get()
      .then(res => {
        const { logo, role, companyColor, firstname, lastname } = res.data();
        firebase.storage().ref(logo).getDownloadURL().then(imgurl => {
          dispatch({
            type: USER_INFO_FETCH_SUCCESS,
            payload: {
              imgurl: imgurl,
              role: role,
              companyColor: companyColor,
              fullName: firstname + " " + lastname
            }
          })
        })
      })
      .catch(err => {
        dispatch({
          type: USER_INFO_FETCH_FAILURE,
          payload: null
        })
      })
    }
  }
}
