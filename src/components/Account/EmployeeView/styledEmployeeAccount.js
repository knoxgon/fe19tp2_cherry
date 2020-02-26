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
    padding-right: 2rem;
  }
`;

export const SubMenuItemDescription = styled.span`
  user-select: none;
  font-size: 1.35rem;
  font-weight: bold;
  margin-left: 4rem;
  color: black;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
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


const FeatureWrapper = styled.div`
  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    width: 10rem;
  }
`;

const FeatureContainer = styled.div`
  background-color:#f9f9f9;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin: 0;
    padding: 0;
    margin-bottom: 10rem;
    width: 100%;
  }
`;

export {
  FeatureArea,
  FeatureWrapper,
  FeatureContainer
}
