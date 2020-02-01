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
height:auto;
display:flex;
align-items:center;
background-color:${Theme.colors.greyLight};
`;

const MenuItems = styled.div`
display: flex;
flex-direction: row;
width:100%;
align-items:center;
margin:0;
padding:0;
overflow:hidden;

@media screen and (max-width: ${Theme.screenSize.xsmall}) {
  flex-direction: column;
}

`;

const A = styled.a`
font-weight:500;
text-align:center;
color:#1a1a1a;
margin-right: 2rem;
font-size:2.3rem;
text-decoration:none;

@media screen and (max-width: ${Theme.screenSize.xsmall}) {
  margin-top: 1rem;
  margin-right: 0;
}
`;

const AccountA = styled.a`
margin-left: auto;
margin-right: 2rem;
font-weight:500;
color:#1a1a1a;
font-size:2.3rem;
text-decoration:none;

@media screen and (max-width: ${Theme.screenSize.xsmall}) {
  margin-left: 0;
  margin-right:0;
  margin-top: 0;
}
`;

const StyledLogo = styled.div`
float:left;
margin-left:3rem;

@media screen and (max-width: ${Theme.screenSize.xsmall}) {
  margin-left: 0;
}
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
display:none;
margin-top:0;
margin-left:4rem;
margin-right:4rem;
font-size:3.5rem;
@media screen and (max-width: ${Theme.screenSize.xsmall}) {
  display:block;
}

`;







class App extends React.Component {
  render() {
    return (


      <StyledApp>
        <Nav>
        <StyledLogo><img src={Logo} alt="website logo" /></StyledLogo>
          <MenuItems>
            
            <A href="">Home</A>
            <A href="">Solutions</A>
            <A href="">About</A>

          </MenuItems>
          <AccountA href="">Account</AccountA>
          <i><Menu icon={IconesSolid.faBars} /></i>
        </Nav>

        <Footer>
          <P>Stockholm - Sweden 131 42</P> <P>Long(59.31), Lat(18.20)</P>
        </Footer>

      </StyledApp>
    );
  }
}

export default App;
