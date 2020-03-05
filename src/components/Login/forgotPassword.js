import React, { useState } from 'react';
import { LoginArea, LoginLogo, LoginButtonWrapper, InputArea, InputImage, Input, LoginButton, ErrorArea, LoginContainerArea, RecoverPasswordFieldWrapper, RecoverPasswordField } from './styledLogin';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { faUserAlt, faKey } from '@fortawesome/free-solid-svg-icons';
import { recoverPassword } from '../../__redux/actions/authActions';
import { BackToSignInWrapper, BackToSignIn } from './styledForgotPassword';

const ForgotPassword = (props) => {
  const [cred, setCred] = useState('');

  const handleRecovery = (e) => {
    e.preventDefault()
    props.recover(cred)
  }

  const onChangeInputHandler = (e) => {
    setCred(e.target.value)
  }

  return (
    (props.uid) ? <Redirect to='/account'/> :
      <LoginContainerArea>
        <LoginArea onSubmit={handleRecovery}>
          <LoginLogo src={require('../../assets/logo_transparent.png')} alt="complogo"></LoginLogo>
          <InputArea style={{marginBottom: '2rem'}}>
            <InputImage icon={faUserAlt}></InputImage>
            <Input placeholder="Enter email" name="email" type="email" onChange={onChangeInputHandler}></Input>
          </InputArea>
          <LoginButtonWrapper>
           <LoginButton type="submit">Reset</LoginButton>
          </LoginButtonWrapper>
          <BackToSignInWrapper>
            <BackToSignIn to="/login">Click here to sign in</BackToSignIn>
          </BackToSignInWrapper>
          {props.feedback ? <ErrorArea >{props.feedback}</ErrorArea> : null}
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
