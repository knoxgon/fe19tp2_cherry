import React from 'react';
import styled from 'styled-components';
import Logo from "./assets/logo_transparent.png";
import Theme from "./config/theme";
import * as IconesSolid from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledApp = styled.div`
width:100%;
height:100%;
`;

const Nav = styled.nav`
width:100%;
height:13rem;
display:flex;
background-color:${Theme.colors.greyLight};
`;

const Ul = styled.ul`
list-style-type:none;
display:flex;
width:100%;
align-items:center;
margin:0;
padding:0;
overflow:hidden;
@media screen and (max-width: 600px) {
    float: none;
    width: 100%;
  
}

`;

const Li = styled.li`
margin-left:2rem;
color:black;
text-align:center;
padding: 2rem 2rem;
text-decoration:none;
`;

const A = styled.a`
font-weight:500;
text-align:center;
color:#1a1a1a;
padding: 1.4rem 1.6rem;
font-size:2.3rem;
text-decoration:none;

`;

const LiAccount = styled.li`
text-align:center;
padding: 5rem 10rem;
font-size:2rem;
text-decoration:none;
display:block;

`;


const StyledLogo = styled.div`
margin-left:3rem;
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

const Menu = styled(FontAwesomeIcon)`
margin-top:4.5rem;
margin-right:3rem;
font-size:3.5rem;
`;







class App extends React.Component {
  render() {
    return (


      <StyledApp>
        <Nav>

          <Ul>
            <StyledLogo><img src={Logo} alt="website logo" /></StyledLogo>
            <Li><A className="active" href="#home">Home</A></Li>
            <Li><A href="">Solutions</A></Li>
            <Li><A href="">About</A></Li>
          </Ul>
            <LiAccount><A href="">Account</A></LiAccount>
           
            
        </Nav>

        <Footer>
          <P>Stockholm - Sweden 131 42</P> <P>Long(59.31), Lat(18.20)</P>
        </Footer>

      </StyledApp>
    );
  }
}

export default App;
