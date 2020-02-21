import React from 'react';
import styled from 'styled-components';
import Navbar from "./components/Navbar/navbar";
import Routes from './__route/routes';

const StyledApp = styled.div`
  width:100%;
  height:100%;
`;

const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <Routes />
    </StyledApp>
  );
}

export default App;
