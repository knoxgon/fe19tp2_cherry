import React, { useState } from 'react';
import { LoginArea, LoginLogo, LoginButtonWrapper, InputArea, InputImage, Input, LoginButton, ErrorArea, LoginContainerArea } from './styledLogin';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { recoverPassword, resetFeedback } from '../../__redux/actions/authActions';
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
            <BackToSignIn onClick={() => props.resetfeedback()} to="/login">Click here to sign in</BackToSignIn>
          </BackToSignInWrapper>
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
    recover: (email) => dispatch(recoverPassword(email)),
    resetfeedback: () => dispatch(resetFeedback())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
