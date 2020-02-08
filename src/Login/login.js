import React from 'react';
import { LoginArea, LoginLogo, InputArea, InputImage, UsernameInput, LoginButton, ErrorArea } from './styledLogin';
import { connect } from 'react-redux';
import { signin } from '../__redux/actions/authActions';

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
      <LoginArea onSubmit={this.handleLogin}>
        <LoginLogo src={require('../assets/logo_transparent.png')} alt="complogo"></LoginLogo>
        <InputArea>
          <InputImage src={require('../assets/login/user.svg')}></InputImage>
          <UsernameInput placeholder="Email" name="email" type="email" onChange={this.onChangeUsernameHandler.bind(this)}></UsernameInput>
        </InputArea>
        <InputArea>
          <InputImage src={require('../assets/login/key.svg')}></InputImage>
          <UsernameInput placeholder="Password" name="password" type="password" onChange={this.onChangePasswordHandler.bind(this)}></UsernameInput>
        </InputArea>
        <LoginButton type="submit">Login</LoginButton>
        {this.props.authError ? <ErrorArea >{this.props.authError}</ErrorArea> : null}
      </LoginArea>
    );
  }
}

//authError is linked through auth reducer
const mapStateToProps = (state) => {
  return {
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
