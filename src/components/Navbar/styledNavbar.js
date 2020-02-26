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
    background-color: grey;
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
    color: black;

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
 
const CheckBoxWrapper = styled.div`
position: relative;
`;
const CheckBoxLabel = styled.label`
position: absolute;
top: 0;
left: 0;
width: 4rem;
height: 2.3rem;
border-radius: 15px;
background: #bebebe;
cursor: pointer;
&::after {
  content: "";
  display: block;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  margin: 0.3rem;
  background: #ffffff;
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
}
`;
const CheckBox = styled.input`
opacity: 0;
z-index: 1;
border-radius: 15px;
width: 42px;
height: 26px;
&:checked + ${CheckBoxLabel} {
  background: #4fbe79;
  &::after {
    content: "";
    font-size:1rem;
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin-left: 21px;
    transition: 0.2s;
  }
}
`;

export { Nav, MenuItems, A, AccountA, StyledLogo, Menu, StyledImgLogo,CheckBoxLabel,CheckBoxWrapper,CheckBox };
