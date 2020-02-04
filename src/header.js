import React from 'react';
import styled from 'styled-components';
import Logo from "./assets/logo_transparent.png";
import Theme from "./config/theme";
import * as IconesSolid from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
width:100%;
height:auto;
display:flex;
align-items:center;
background-color:${Theme.colors.greyLight};

@media screen and (max-width: ${Theme.screenSize.xsmall}) {
  justify-content:space-between;
}
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
  flex-direction:column;
  background-color:grey;
  position: absolute;
  background-color:${Theme.colors.greyLight};
  right: 0;
  width:15rem;
  margin-top:13.3rem;
  padding:2rem 0 1rem 0;
  z-index: 1;
  
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
  width:100%;  
  :hover {
    
  }
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
 font-size:2rem;
 margin-right:0rem;

}
`;

const StyledLogo = styled.div`
float:left;
margin-left:3rem;

@media screen and (max-width: ${Theme.screenSize.xsmall}) {
  margin-left: 0;

}
`;


const Menu = styled(FontAwesomeIcon)`
display:none;
margin-top:-1.1rem;
margin-left:4rem;
margin-right:4rem;
font-size:3.5rem;



@media screen and (max-width: ${Theme.screenSize.xsmall}) {
  display:block;
  
}

`;



class Header extends React.Component {

  

  mediaQuery = window.matchMedia('(max-width: ' + Theme.screenSize.xsmall + ')')

  listnerMobileSize = (event) => {
    this.setState({
      isMobile: event.matches
    })
  }

  constructor() {
    super()
    this.state = {
      showMenu: false,
      isMobile: this.mediaQuery.matches
    }
  }
  
  componentDidMount() {
    this.mediaQuery.addListener(this.listnerMobileSize);
  }

  componentWillUnmount() {
    this.mediaQuery.removeListener(this.listnerMobileSize);
  }

  
  menuBtnClick() {
    this.setState({
      showMenu: !this.state.showMenu,
      isMobile: this.state.isMobile
    })
  }
  renderMenu() {

    if ((this.state.isMobile && this.state.showMenu) || !this.state.isMobile) {
      return (
        <MenuItems>

          <A href="">Home</A>
          <A href="">Solutions</A>
          <A href="">About</A>

        </MenuItems>
      )
    }




  }
  render() {
    return (

      <Nav>
        <StyledLogo><img src={Logo} alt="website logo" /></StyledLogo>

        {this.renderMenu()}

        <AccountA>Account</AccountA>
        <i><Menu onClick={() => this.menuBtnClick()} icon={IconesSolid.faBars} /></i>
      </Nav>

    );

  }
}


export default Header;