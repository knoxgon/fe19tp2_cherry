import React from 'react';
import { LoginArea, LoginLogo, InputArea, InputImage, UsernameInput, LoginButton, ErrorArea } from './styledLogin';
import {fireapp} from '../config/firebase'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',

      feedback: '',
      loading: false
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    
    const { email, password } = e.target.elements;
      fireapp.auth().signInWithEmailAndPassword(email.value, password.value)
      .then(success => {
        this.props.history.push("/account");
      })
      .catch(fail => {
        this.setState({feedback: fail.message});
      });

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
        {this.state.feedback ? <ErrorArea >{this.state.feedback}</ErrorArea> : null}
      </LoginArea>
    );
  }
}

export default Login;
