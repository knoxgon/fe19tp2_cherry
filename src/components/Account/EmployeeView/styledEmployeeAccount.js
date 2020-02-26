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
