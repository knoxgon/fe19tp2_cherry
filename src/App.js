import React from 'react';
import styled from 'styled-components';
import Routes from './__route/routes';

const StyledApp = styled.div`
  width:100%;
  height:100%;
`;

const App = () => {
  return (
    <StyledApp>
      <Routes />
    </StyledApp>
  );
}

export default App;
