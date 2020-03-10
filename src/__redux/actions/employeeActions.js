import { ADD_EMPLOYEE_FAILURE, ADD_EMPLOYEE_SUCCESS } from "./types";
import { firebaseEmployeeCreationInstance } from "../../__config/firebase";
import { getUsers } from "./userInfoActions";

export const addEmployee = info => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const admin_user_uid = firebase.auth().currentUser.uid;

    firestore.collection("clients").doc(admin_user_uid).get().then(a => {
      if(a.data().users.length > 4) {
        dispatch({
          type: ADD_EMPLOYEE_FAILURE,
          payload: 'Max limit reached.'
        });
      } else {
        firebaseEmployeeCreationInstance
        .auth()
        .createUserWithEmailAndPassword(info.email, info.password)
        .then(res => {
          firestore
            .collection("clients")
            .doc(admin_user_uid)
            .get()
            .then(admresult => {
              const {
                company,
                logo,
                subscription,
                companyDarkGraphColor,
                companyLightGraphColor,
                companyDarkContainerColor,
                companyDarkFontColor,
                companyDarkSpecBg,
                companyDarkSpecBord,
                companyLightSpecBg,
                companyLightSpecBord,
                companyDarkNavbarColor,
                companyLightContainerColor,
                companyLightFontColor,
                companyLightNavbarColor
              } = admresult.data();
              return {
                company,
                logo,
                subscription,
                companyDarkGraphColor,
                companyLightGraphColor,
                companyDarkContainerColor,
                companyDarkFontColor,
                companyDarkSpecBg,
                companyDarkSpecBord,
                companyLightSpecBg,
                companyLightSpecBord,
                companyDarkNavbarColor,
                companyLightContainerColor,
                companyLightFontColor,
                companyLightNavbarColor
              };
            })
            .then(compInfo => {
              firestore
                .collection("clients")
                .doc(res.user.uid)
                .set({
                  adminId: admin_user_uid,
                  firstname: info.firstname,
                  lastname: info.lastname,
                  companyLightContainerColor:
                    compInfo.companyLightContainerColor,
                  companyLightFontColor: compInfo.companyLightFontColor,
                  companyLightNavbarColor: compInfo.companyLightNavbarColor,
                  companyLightSpecBg: compInfo.companyLightSpecBg,
                  companyLightSpecBord: compInfo.companyLightSpecBord,
                  companyLightGraphColor: compInfo.companyLightGraphColor,
                  companyDarkContainerColor: compInfo.companyDarkContainerColor,
                  companyDarkFontColor: compInfo.companyDarkFontColor,
                  companyDarkNavbarColor: compInfo.companyDarkNavbarColor,
                  companyDarkSpecBg: compInfo.companyDarkSpecBg,
                  companyDarkSpecBord: compInfo.companyDarkSpecBord,
                  companyDarkGraphColor: compInfo.companyDarkGraphColor,
                  role: "Employee",
                  company: compInfo.company,
                  logo: compInfo.logo,
                  subscription: {
                    period: compInfo.subscription.period,
                    plan: compInfo.subscription.plan
                  }
                })
                .then(() => {
                  const clientsRef = firestore
                    .collection("clients")
                    .doc(admin_user_uid);
                  return firestore
                    .runTransaction(tr => {
                      return tr.get(clientsRef).then(dc => {
                        const newEmployee = { employeeReference: res.user.uid };
                        const users = dc.data().users;
                        users.push(newEmployee);
                        tr.update(clientsRef, { users: users });
                      });
                    })
                    .then(() => {
                      dispatch({
                        type: ADD_EMPLOYEE_SUCCESS,
                        payload: "User successfully added."
                      });
                      dispatch(getUsers());
                    })
                    .catch(err => {
                      dispatch({
                        type: ADD_EMPLOYEE_FAILURE,
                        payload: err.message
                      });
                    });
                })
                .catch(err => {
                  dispatch({
                    type: ADD_EMPLOYEE_FAILURE,
                    payload: err.message
                  });
                });
            })
            .catch(err => {
              dispatch({
                type: ADD_EMPLOYEE_FAILURE,
                payload: err.message
              });
            });
        })
        .catch(err => {
          dispatch({
            type: ADD_EMPLOYEE_FAILURE,
            payload: err.message
          });
        });
      }
    })
  };
};
