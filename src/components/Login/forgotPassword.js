import React, { useState } from 'react';
import { LoginArea, LoginLogo, InputArea, InputImage, EmailInput, LoginButton, ErrorArea, LoginContainerArea, ForgotPassword } from './styledForgotPassword';
import { connect } from 'react-redux';
import { signin } from '../../__redux/actions/authActions';
import { Redirect } from 'react-router-dom';



const Login = (props) => {
  const [creds, setCreds] = useState({ email: '', password: ''});

  const handleLogin = (e) => {
    e.preventDefault();
    props.signin(creds);
  }

  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;
    setCreds({...creds, [name]: value });
  }

  return (
    (props.uid) ? <Redirect to='/account'/> :
      <LoginContainerArea>
        <LoginArea onSubmit={handleLogin}>
          <LoginLogo src={require('../../assets/logo_transparent.png')} alt="complogo"></LoginLogo>
          <ForgotPassword> Enter email to recover password </ForgotPassword>
          <br/>
          <InputArea>
            <InputImage src={require('../../assets/login/user.svg')}></InputImage>
            <EmailInput placeholder="Email" name="email" type="email" onChange={onChangeInputHandler}></EmailInput>
          </InputArea>
          <LoginButton type="submit">Reset</LoginButton>
          {props.authError ? <ErrorArea >{props.authError}</ErrorArea> : null}
        </LoginArea>
      </LoginContainerArea>
  )
}

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (credentials) => dispatch(signin(credentials))
  }
}

//First parameter is state, second dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Login);
