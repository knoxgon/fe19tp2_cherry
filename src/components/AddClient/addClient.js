import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addClient } from '../../__redux/actions/clientActions';
import { EmployeeForm } from '../AddClient/styledAddClient';

const AddClient = (props) => {
  const [info, setInfo] = useState({ email: '', password: '', firstname: '', lastname: '', role: '', company: '', plan: '', period: '', logo: '' })

  const onClientRegistration = (e) => {
    e.preventDefault();
    props.makeClient(info);
  }

  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInfo({...info, [name]: value});
  }

  return (
      <form onSubmit = {onClientRegistration}>
        <input placeholder="Email" type="email" name="email" onChange={onInputChangeHandler} autoComplete="new-password"></input>
        <br/>
        <input placeholder="Password" type="password" name="password" onChange={onInputChangeHandler}></input>
        <br/>
        <input placeholder="Firstname" type="text" name="firstname" onChange={onInputChangeHandler}></input>
        <br/>
        <input placeholder="Lastname" type="text" name="lastname" onChange={onInputChangeHandler}></input>
        <br/>
        <input placeholder="Company" type="text" name="company" onChange={onInputChangeHandler}></input>
        <br/>
        <input placeholder="Role" type="text" name="role" onChange={onInputChangeHandler}></input>
        <br/>
        <select name="logo" onChange={onInputChangeHandler}>
          <option value="klarna-logo.png" selected>Klarna</option>
          <option value="swedbank-logo.png">Swedbank</option>
          <option value="wasa-kredit-logo.png">Wasa Kredit</option>
        </select>
        <br/>
        <select name="plan" onChange={onInputChangeHandler}>
          <option value="Professional" selected>Professional</option>
          <option value="Ultimate">Ultimate</option>
          <option value="Enterprise">Enterprise</option>
        </select>
        <select name="period" onChange={onInputChangeHandler}>
          <option value="30">30 days</option>
          <option value="180">6 months</option>
          <option value="365">1 year</option>
        </select>
        <br/>
        {props.feedback ? <div>Message: {props.feedback}</div> : null }
        <br/>
        <button type="submit">Add</button>
      </form>
  );
}

const mapStateToProps = (state) => {
  return {
    feedback: state.client.feedback
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeClient: (clientinfo) => dispatch(addClient(clientinfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddClient)
