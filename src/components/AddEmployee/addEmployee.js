import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEmployee } from '../../__redux/actions/employeeActions';
import { EmployeeForm, EmployeeInput, Button } from '../AddEmployee/styledAddEmployee';
 
const AddEmployee = (props, theme) => {
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
      <EmployeeForm onSubmit={ onEmployeeRegistration }>
        <EmployeeInput placeholder="Email" type="email" name="email" onChange={onInputChangeHandler} autoComplete="new-password"></EmployeeInput>
        <br/>
        <EmployeeInput placeholder="Password" type="password" name="password" onChange={onInputChangeHandler}></EmployeeInput>
        <br/>
        <EmployeeInput placeholder="Firstname" type="text" name="firstname" onChange={onInputChangeHandler}></EmployeeInput>
        <br/>
        <EmployeeInput placeholder="Lastname" type="text" name="lastname" onChange={onInputChangeHandler}></EmployeeInput>
        <br/>
        {props.feedback ? <div>Message: {props.feedback}</div> : null }
        <br/>
        <Button btcolor={theme.navColor} type="submit">Add</Button>
      </EmployeeForm>
  );
}

const mapStateToProps = (state) => {
  return {
    feedback: state.employee.feedback,
    theme: state.darkModeToggler.activeTheme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeEmployee: (employeeinfo) => dispatch(addEmployee(employeeinfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee)
