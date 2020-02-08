import React from 'react';
import styled from 'styled-components';
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import { firebase } from './__config/firebase'
import Routes from './__route/routes';

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
        <Routes></Routes>
        <Footer />        
      </StyledApp>
    );
  }
}

export default App;
