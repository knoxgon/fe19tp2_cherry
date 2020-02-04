import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Theme from "../config/theme";


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

const A = styled.p`
  font-weight:500;
  text-align:center;
  color:#1a1a1a;
  margin-right: 2rem;

  & a {
    font-size:2.3rem;
    text-decoration:none;
    color:black;
  }


  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    margin-top: 1rem;
    margin-right: 0;
    width:100%;  
    
    &:hover {
      
    }
  }
`;

const AccountA = styled.p`
  margin-left: auto;
  margin-right: 2rem;
  font-weight:500;
  color:#1a1a1a;
  font-size:2.3rem;

  & a {
    text-decoration:none;
    color:black;
  }

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

export {
  Nav,
  MenuItems,
  A,
  AccountA,
  StyledLogo,
  Menu
}
