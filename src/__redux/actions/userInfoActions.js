import { USER_INFO_FETCH_SUCCESS, USER_COLOR_PREP, USER_INFO_FETCH_FAILURE, GET_USERS_FAILURE, GET_USERS_SUCCESS } from "./types";

export const getInfo = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    if(!firebase.auth().currentUser) {
      dispatch({
        type: USER_INFO_FETCH_FAILURE,
        payload: null
      });
    } else {
      const userid = firebase.auth().currentUser.uid;
      firestore
      .collection("clients")
      .doc(userid)
      .get()
      .then(res => {
        const { logo, role, companyLightSpecBg, companyDarkGraphColor, companyLightGraphColor, companyLightSpecBord, companyDarkSpecBg, companyDarkSpecBord, companyDarkContainerColor, companyDarkFontColor, companyDarkNavbarColor, companyLightContainerColor, companyLightFontColor, companyLightNavbarColor, firstname, lastname } = res.data();
        firebase
          .storage()
          .ref(logo)
          .getDownloadURL()
          .then(imgurl => {
            dispatch({
              type: USER_INFO_FETCH_SUCCESS,
              payload: {
                imgurl: imgurl,
                role: role,
                companyLightContainerColor,
                companyLightFontColor,
                companyLightNavbarColor,
                companyLightSpecBg,
                companyLightSpecBord,
                companyLightGraphColor,
                companyDarkContainerColor,
                companyDarkFontColor,
                companyDarkNavbarColor,
                companyDarkSpecBg,
                companyDarkSpecBord,
                companyDarkGraphColor,
                fullName: firstname[0] + ". " + lastname
              }
            })
            dispatch({
              type: USER_COLOR_PREP,
              payload: {
                companyLightContainerColor,
                companyLightFontColor,
                companyLightNavbarColor,
                companyLightSpecBg,
                companyLightSpecBord,
                companyLightGraphColor,
                companyDarkContainerColor,
                companyDarkFontColor,
                companyDarkNavbarColor,
                companyDarkSpecBg,
                companyDarkSpecBord,
                companyDarkGraphColor
              }
            })
          })
      })
      .catch(err => {
        dispatch({
          type: USER_INFO_FETCH_FAILURE,
          payload: null
        });
      });
    }
  };
};

export const getUsers = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    if(!firebase.auth().currentUser) {                                                
      dispatch({
        type: GET_USERS_FAILURE,
        payload: null
      });
    } else {
      const admin_uid = firebase.auth().currentUser.uid;
      firestore
      .collection("clients")
      .get()
      .then(res => {
        const users = res.docs.map(elem => {
          if( elem.data().adminId === admin_uid)
            return { fullname: elem.data().firstname + ' ' + elem.data().lastname, role: elem.data().role}
        }).filter(elem => elem)
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: {
            users
          }
        })
      })
      .catch(err => {
        dispatch({
          type: GET_USERS_FAILURE,
          payload: null
        });
      });
    }
  };
};

