import React from 'react';
import styled from 'styled-components';
import Navbar from "./components/Navbar/navbar";
import Routes from './__route/routes';
import backgroundColor from './__config/theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
  font-size: 62.5%;
  width: 100%;
  height: 100%;
  background-color:white;
  }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

`

const StyledApp = styled.div`
width:100%;
height:100%;
`


const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <Routes />
      <GlobalStyle/>
    </StyledApp>
  );
}

export default App;
