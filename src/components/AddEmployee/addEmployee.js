import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEmployee } from '../../__redux/actions/employeeActions';
import { EmployeeForm } from '../AddEmployee/styledAddEmployee';
 
const AddEmployee = (props) => {
  const [info, setInfo] = useState({ email: '', password: '', firstname: '', lastname: '' })

  const onEmployeeRegistration = (e) => {
    e.preventDefault();
    props.makeEmployee(info);
  }

  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInfo({...info, [name]: value});
  }

  return (
      <EmployeeForm themeColor={props.bgColor} onSubmit = { onEmployeeRegistration }>
        <input placeholder="Email" type="email" name="email" onChange={onInputChangeHandler} autoComplete="new-password"></input>
        <br/>
        <input placeholder="Password" type="password" name="password" onChange={onInputChangeHandler}></input>
        <br/>
        <input placeholder="Firstname" type="text" name="firstname" onChange={onInputChangeHandler}></input>
        <br/>
        <input placeholder="Lastname" type="text" name="lastname" onChange={onInputChangeHandler}></input>
        <br/>
        {props.feedback ? <div>Message: {props.feedback}</div> : null }
        <br/>
        <button type="submit">Add</button>
      </EmployeeForm>
  );
}

const mapStateToProps = (state) => {
  if(state.darkModeToggler.color.colors.background)
    console.log(state.darkModeToggler.color.colors.background)
  return {
    feedback: state.employee.feedback,
    bgColor: state.darkModeToggler.color.colors.background
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeEmployee: (employeeinfo) => dispatch(addEmployee(employeeinfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee)
