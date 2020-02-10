import { ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAILURE } from "../actions/types";


const initialState = {
  feedback: null
}

export const EmployeeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        feedback: action.payload
      }
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        feedback: action.payload
      }
    default:
      return state;
  }
}
