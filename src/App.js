import React from 'react';
import styled from 'styled-components';
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Routes from './routes';


const StyledApp = styled.div`
  width:100%;
  height:100%;
`;


class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <Header />
        <Routes></Routes>
        <Footer />        
      </StyledApp>
    );
  }
}

export default App;
