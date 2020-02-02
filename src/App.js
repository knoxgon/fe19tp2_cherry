import React from 'react';
import styled from 'styled-components';
import Theme from "./config/theme";
import Header from "./header";


const StyledApp = styled.div`
width:100%;
height:100%;
`;

const Footer = styled.footer`
width:100%;
display:flex;
position:fixed;
align-items:center;
justify-content:center;
bottom:0;
text-align:center;
height:5rem;
background-color:${Theme.colors.greyLight};
`;

const P = styled.p`
padding:4rem;
font-size:1.8rem;
`;





class App extends React.Component {

  render() {
    return (


      <StyledApp>
       
  {<Header/>}
  
  <Footer>
      <P>Stockholm - Sweden 131 42</P> <P>Long(59.31), Lat(18.20)</P>
    </Footer>

      </StyledApp>
    );
  }
}

export default App;
