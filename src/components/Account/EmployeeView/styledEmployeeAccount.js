import styled from 'styled-components';
import Theme from "../../../__config/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BodyWrapper = styled.div`
  padding: 0rem;
  background-color: #F4F8F9;
`;

export const StyledImgLogo = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  @media screen and (max-width: ${Theme.screenSize.xsmall}) {    
  }
`;

export const ClientCompanyLogo = styled.img`
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 4rem;
  margin-left: 2rem;

  justify-content: center;
  width: 9rem;
  max-height:100%;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    margin-right: 2rem;
  }
`;

export const MenuImage = styled(FontAwesomeIcon)`
  user-select: none;
  font-size: 3rem;
  color: black;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    display: flex;
    flex-direction: row;
    width: 5.5rem;
    height: 5.5rem;
    margin-left: 2rem;
  }
`;

export const MenuGroupArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2.5rem;
  margin-bottom: 5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);

    @media screen and (max-width: ${Theme.screenSize.xsmall}) {
      transform: scale(1);
      margin-bottom: 0rem;
    }
  }

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 0rem;
  }
`;

export const MenuDescription = styled.span`
  user-select: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin: 0;
    margin-left: 2rem;
  }
`;

export const ClientMenu = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 10rem;
  height: 100vh;
  border-right: inset;
  background-color: ${props => props.navColor ? props.navColor : "#ffffff"};

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
  }
`;

export const MainArea = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    flex-direction: column;

  }
`;

export const GraphContainer = styled.div`
  background-color:#f9f9f9;
  display: flex;
  flex-grow: 1;
  background-color: #e5f1e5;
  margin-left: 1rem;
  width: calc(100vw - 11.3rem);

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin: 0;
    padding: 0;
    margin-bottom: 10rem;
    width: 100%;
  }
`;

 
export const CheckBoxWrapper = styled.div`
position: relative;
`;

export const CheckBoxLabel = styled.label`
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
export const CheckBox = styled.input`
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
