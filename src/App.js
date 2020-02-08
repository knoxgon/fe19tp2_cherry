import React from 'react';
import styled from 'styled-components';
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
// import PrivateRoute from './__route/private';
import Account from './Account/account';
import Login from './Login/login';
import { Route, Switch } from 'react-router-dom'
import { firebase } from './__config/firebase'
import User from "./user/user";

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

    firebase.auth().onAuthStateChanged(user => {
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
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/account" component={Account} />
          <Route exact path="/solutions" />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" />
          <Route path="/user" component={User} />
        </Switch>
        <Footer />        
      </StyledApp>
    );
  }
}

export default App;
