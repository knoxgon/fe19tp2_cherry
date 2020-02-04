import React from 'react';
import styled from 'styled-components';
import Header from "./Header/header";
import Footer from "./Footer/footer";
import PrivateRoute from './__route/private';
import Account from './Account/account';
import Login from './Login/login';
import { Route, Switch } from 'react-router-dom'
import fireapp from './config/firebase'

const StyledApp = styled.div`

  width:100%;
  height:100%;
`;



class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      authenticated: false,
      currentUser: null
    }
  }
  
  componentWillMount() {
    fireapp.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    return (
      <StyledApp>
        <Header />
        <Switch>
          <Route exact path="/" />
          <PrivateRoute exact path="/account" authenticated={this.state.authenticated} component={Account} />
          <PrivateRoute exact path="/solutions" />
          <Route path="/login" component={Login} />
          <Route path="/about" />
        </Switch>
        <Footer />        
      </StyledApp>
    );
  }
}

export default App;
