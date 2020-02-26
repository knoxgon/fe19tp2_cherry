import styled, {css, keyframes } from 'styled-components';
import Theme from "../../../__config/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const KFRightToLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-400%);
  }
`

const KFLeftToRight = keyframes`
  0% {
    transform: translateX(-400%);
  }
  100% {
    transform: translateX(0%);
  }
`

export const BodyWrapper = styled.div`
  padding: 0rem;
  background-color: #e0e0e0;
`;


const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  @media screen and (max-width: ${Theme.screenSize.xsmall}) {    
  }
`;

const ClientCompanyLogo = styled.img`
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

const ClientArea = styled.div`
  display: flex;
  align-items: center;
  background-color: #efefef;
  height: 10rem;
`;

const ClientNameArea = styled.h2`
  font-size: 1.75rem;
`;

const MenuImage = styled(FontAwesomeIcon)`
  user-select: none;
  font-size: 4.5rem;
  color: white;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    display: flex;
    flex-direction: row;
    width: 5.5rem;
    height: 5.5rem;
    margin-left: 2rem;
  }
`;


export const SubMenuItemImg = styled(FontAwesomeIcon)`
  user-select: none;
  color: white;
  vertical-align: middle;
  font-size: 3.5rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    margin-left: 2rem;
  }
`;

export const LeftSideItemArea = styled.div`
  cursor: pointer;

  &:hover {
    transform: scale(1.1);

    @media screen and (max-width: ${Theme.screenSize.xsmall}){
      transform: scale(1);
    }
  }

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    padding-left: 4rem;
    padding-right: 2rem;
  }
`;

export const SubMenuItemDescription = styled.span`
  user-select: none;
  font-size: 1.35rem;
  font-weight: bold;
  margin-left: 4rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin-left: 2rem;
    margin-top: 1rem;
  }
`;

const MenuGroupArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
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

const MenuDescription = styled.span`
  user-select: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin: 0;
    margin-left: 2rem;
  }
`;

export const LeftSideFeatureAdapter = styled.div`
  flex-direction: column;
  margin-left: 1.5rem;
  animation-fill-mode: both;
  visibility: hidden;

  ${props => {
    return props.toggle ?
      css`
        display: flex;
        animation: ${KFLeftToRight} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        visibility: visible;
      ` :
      css`
        display: flex;
        visibility: visible;
        animation: ${KFRightToLeft} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      `
    }
  }

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    flex-direction: row;
    flex-wrap: nowrap;
    margin-left: 0rem;
  }
`;

const BorderUnderline = styled.div`
  height: 0.1rem;
  background-color: #dddddd;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    flex-direction: column;

  }
`;

const ClientMenu = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 15rem;
  background-color: #3a3838;
  background-color: ${props => props.navColor};

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
  }
`;

const FeatureContainer = styled.div`
  background-color:#f9f9f9;
  display: flex;
  flex-grow: 1;
  background-color: #e5f1e5;
  margin-left: 1rem;
  width: calc(100vw - 16rem);

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin: 0;
    padding: 0;
    margin-bottom: 10rem;
    width: 100%;
  }
`;

export {
  Wrapper,
  ClientCompanyLogo,
  ClientArea,
  ClientNameArea,
  MenuImage,
  MenuGroupArea,
  MenuDescription,
  BorderUnderline,
  ClientMenu,
  MainArea,
  FeatureContainer
}
