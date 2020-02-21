import styled, {css, keyframes } from 'styled-components';
import Theme from "../../../__config/theme";

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


const Wrapper = styled.div`
  margin-top: 4rem;
  margin-left: 4rem;
  margin-right: 4rem;
  margin-bottom: 14rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    margin-top: 2rem;
    margin-left: 0rem;
    margin-right: 0rem;
    
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

const FeatureImage = styled.img`
  user-select: none;
  width: 5rem;
  height: 5rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    display: flex;
    flex-direction: row;
    width: 5.5rem;
    height: 5.5rem;
    margin-left: 2rem;
  }
`;


export const SubMenuItemImg = styled.img`
  user-select: none;
  vertical-align: middle;
  width: 3rem;
  height: 3rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    margin-left: 2rem;
  }
`;

export const LeftSideItemArea = styled.div`
  cursor: pointer;
  padding-top: 3rem;
  padding-bottom: 3rem;


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
    padding-right: 4rem;
  }
`;

export const SubMenuItemDescription = styled.span`
  user-select: none;
  font-size: 1.35rem;
  font-weight: bold;
  /* margin-block-start: -2.8rem;
  margin-block-end: -2rem; */
  margin-left: 4rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    /* margin-block-start: 0rem;
    margin-block-end: 0rem; */
    margin-left: 2rem;
    margin-top: 1rem;
  }
`;

const FeatureArea = styled.div`
  display: inline-flex;
  vertical-align: middle;
  width: 25rem;
  cursor: pointer;
  margin-bottom: 2rem;

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

const FeatureDescription = styled.p`
  user-select: none;
  font-size: 1.5rem;
  font-weight: bold;
  /* margin-block-start: 1rem;
  margin-block-end: 1rem; */
  margin-left: 2rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin: 0;
    /* margin-block-start: 2rem;
    margin-block-end: 2rem; */
    margin-left: 2rem;
  }
`;

export const LeftSideFeatureAdapter = styled.div`
  flex-direction: column;
  margin-left: 4rem;
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
  margin: 2rem 4rem 2rem 4rem;
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

const FeatureWrapper = styled.div`
  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    width: 10rem;
  }
`;

const FeatureContainer = styled.div`
  background-color:#fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin: 0;
    padding: 0;
    padding-bottom: 10rem;
    margin-bottom: 7.5rem;
    width: 100%;
  }
`;

export {
  Wrapper,
  ClientCompanyLogo,
  ClientArea,
  ClientNameArea,
  FeatureImage,
  FeatureArea,
  FeatureDescription,
  BorderUnderline,
  FeatureWrapper,
  MainArea,
  FeatureContainer
}
