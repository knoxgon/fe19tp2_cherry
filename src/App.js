import React from 'react';
import styled from 'styled-components';
import Theme from "./config/theme";
import Header from "./header";
import Footer from "./footer";


const StyledApp = styled.div`
width:100%;
height:100%;
`;


class App extends React.Component {

  render() {
    return (

      <StyledApp>

        {<Header />}

        {<Footer />}
        
      </StyledApp>
    );
  }
}

export default App;
