import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Theme from "../../__config/theme";

const Nav = styled.nav`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  background-color: ${props => props.navColor};
  border-bottom: 0.02rem solid #dddddd;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    justify-content: space-around;
    height: 11rem;
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-left: 6rem;
  padding: 0;
  overflow: hidden;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    flex-direction: column;
    background-color: grey;
    position: absolute;
    background-color: ${Theme.colors.beige};
    right: 0;
    width: 15rem;
    margin-top: 13.5rem;
    padding: 0rem 0rem 1rem 0rem;
    border-top: 0.02rem solid #dddddd;
    box-shadow: -4px 6px 5px 0px rgba(0, 0, 0, 0.05);
    z-index: 1;
  }
`;

const A = styled.p`
  font-weight: 500;
  text-align: center;
  color: #1a1a1a;
  margin-right: 2rem;

  & a {
    font-size: 2.3rem;
    text-decoration: none;
    color: black;
    &:hover {
      text-decoration: underline #bebebe;
    }
  }

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    margin-top: 1rem;
    margin-right: 0;
    width: 100%;
  }
`;

const AccountA = styled.p`
  margin-left: auto;
  margin-right: 2rem;
  font-weight: 500;
  color: #1a1a1a;
  font-size: 2.3rem;

  & a {
    text-decoration: none;
    color: ${Theme.colors.fontColor};

    &:hover {
      text-decoration: underline #bebebe;
    }
  }

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    font-size: 2rem;
    margin-right: 0rem;
  }
`;

const StyledLogo = styled.div`
  float: left;
  margin-left: 3rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    margin-left: 0rem;
  }
`;

const Menu = styled(FontAwesomeIcon)`
  display: none;
  margin-top: -1.1rem;
  margin-left: 4rem;
  font-size: 3.5rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    display: block;
    font-size: 3rem;
    margin-right: 2rem;
  }
`;

const StyledImgLogo = styled.img`
  width: 13rem;
  height: 10rem;
`;

export { Nav, MenuItems, A, AccountA, StyledLogo, Menu, StyledImgLogo };
