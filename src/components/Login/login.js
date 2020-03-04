import React, { useState } from 'react';
import { LoginArea, LoginLogo, LoginButtonWrapper, RecoverPasswordFieldWrapper, InputArea, InputImage, Input, LoginButton, ErrorArea, LoginContainerArea, RecoverPasswordField } from './styledLogin';
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
          <InputArea>
            <InputImage src={require('../../assets/login/user.svg')}></InputImage>
            <Input placeholder="Email" name="email" type="email" onChange={onChangeInputHandler}></Input>
          </InputArea>
          <InputArea>
            <InputImage src={require('../../assets/login/key.svg')}></InputImage>
            <Input placeholder="Password" name="password" type="password" onChange={onChangeInputHandler}></Input>
          </InputArea>
          <RecoverPasswordFieldWrapper>
            <RecoverPasswordField>Forgot Password?</RecoverPasswordField>
          </RecoverPasswordFieldWrapper>
          <LoginButtonWrapper>
           <LoginButton type="submit">Login</LoginButton>
          </LoginButtonWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
