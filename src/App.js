import React from 'react';
import styled from 'styled-components';
import Header from "./Header/header";
import Footer from "./Footer/footer";

import {BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';


const StyledApp = styled.div`
  width:100%;
  height:100%;
`;


class App extends React.Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <Header />
          <Routes></Routes>
          <Footer />        
        </StyledApp>
      </Router>
    );
  }
}

export default App;
