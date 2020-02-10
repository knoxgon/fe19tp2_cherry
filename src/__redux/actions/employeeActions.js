import { ADD_EMPLOYEE_FAILURE, ADD_EMPLOYEE_SUCCESS } from "./types";
import { firebaseEmployeeCreationInstance } from '../../__config/firebase';

export const addEmployee = (info) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user_uid = firebase.auth().currentUser.uid;

    firebaseEmployeeCreationInstance.auth().createUserWithEmailAndPassword(info.email, info.password)
      .then(() => {
        const newEmployee = {
          firstname: info.firstname,
          lastname: info.lastname,
          role: 'Employee'
        }

        const clientsRef = firestore.collection('clients').doc(user_uid);

        return firestore.runTransaction((tr) => {
          return tr.get(clientsRef).then((dc) => {
            const users = dc.data().users;
            users.push(newEmployee);
            tr.update(clientsRef, { users: users});
          })
        }).then(() => {
          dispatch({
            type: ADD_EMPLOYEE_SUCCESS,
            payload: 'User successfully added.'
          })
        }).catch((err) => {
          dispatch({
            type: ADD_EMPLOYEE_FAILURE,
            payload: err.message
          })
        })
      })
  }
}
