import React, { useState } from 'react';
import { LoginArea, LoginLogo, LoginButtonWrapper, RecoverPasswordFieldWrapper, InputArea, InputImage, Input, LoginButton, ErrorArea, LoginContainerArea, RecoverPasswordField } from './styledLogin';
import { connect } from 'react-redux';
import { signin } from '../../__redux/actions/authActions';
import { Redirect } from 'react-router-dom';
import { faUserAlt, faKey } from '@fortawesome/free-solid-svg-icons';

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
          <InputArea style={{marginBottom: '2rem'}}>
            <InputImage icon={faUserAlt}></InputImage>
            <Input placeholder="Email" name="email" type="email" onChange={onChangeInputHandler}></Input>
          </InputArea>
          <InputArea>
            <InputImage icon={faKey}></InputImage>
            <Input placeholder="Password" name="password" type="password" onChange={onChangeInputHandler}></Input>
          </InputArea>
          <RecoverPasswordFieldWrapper>
            <RecoverPasswordField to="/recovery">Forgot Password?</RecoverPasswordField>
          </RecoverPasswordFieldWrapper>
          <LoginButtonWrapper>
           <LoginButton type="submit">Login</LoginButton>
          </LoginButtonWrapper>
          {props.feedback ? <ErrorArea >{props.feedback}</ErrorArea> : null}
        </LoginArea>
      </LoginContainerArea>
  )
}

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    feedback: state.auth.feedback
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (credentials) => dispatch(signin(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
