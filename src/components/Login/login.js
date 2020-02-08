import React from 'react';
import { LoginArea, LoginLogo, InputArea, InputImage, UsernameInput, LoginButton, ErrorArea, LoginContainerArea } from './styledLogin';
import { connect } from 'react-redux';
import { signin } from '../../__redux/actions/authActions';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.signin(this.state);
  }

  onChangeUsernameHandler = (e) => {
    this.setState({email: e.target.value});
  }
  
  onChangePasswordHandler = (e) => {
    this.setState({password: e.target.value});
  }

  render() {
    return(
      this.props.uid ? <Redirect to='/account'/> :
      <LoginContainerArea>
        <LoginArea onSubmit={this.handleLogin}>
          <LoginLogo src={require('../../assets/logo_transparent.png')} alt="complogo"></LoginLogo>
          <InputArea>
            <InputImage src={require('../../assets/login/user.svg')}></InputImage>
            <UsernameInput placeholder="Email" name="email" type="email" onChange={this.onChangeUsernameHandler.bind(this)}></UsernameInput>
          </InputArea>
          <InputArea>
            <InputImage src={require('../../assets/login/key.svg')}></InputImage>
            <UsernameInput placeholder="Password" name="password" type="password" onChange={this.onChangePasswordHandler.bind(this)}></UsernameInput>
          </InputArea>
          <LoginButton type="submit">Login</LoginButton>
          {this.props.authError ? <ErrorArea >{this.props.authError}</ErrorArea> : null}
        </LoginArea>
      </LoginContainerArea>
    );
  }
}

//authError is linked through auth reducer
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
