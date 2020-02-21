import styled from 'styled-components';
import Theme from "../../../__config/theme";

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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 5rem;
  height: 5rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    display: flex;
    flex-direction: row;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const FeatureArea = styled.div`
  // display: inline-flex;
  vertical-align: middle;
  margin-bottom: 2rem;
  width: 15.5rem;
  cursor: pointer;

  &:nth-last-child(3) {
    width: 21.7rem;

    @media screen and (max-width: ${Theme.screenSize.xsmall}) {
      width: 10rem;
      margin-left: 4rem;
    }
  }

  &:nth-last-child(4) {
    width: 17.6rem;

    @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    width: 10rem;
    }
  }

  &:nth-last-child(1) {
    margin-top: 20rem;

    @media screen and (max-width: ${Theme.screenSize.xsmall}) {
      margin-top: 0rem;
      width: 10rem; 
      margin-left: 5rem;
    }
  }

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0rem;
    width: 10rem;
  }
`;

const FeatureDescription = styled.p`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 2rem;
  font-weight: bold;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  margin-left: 2rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    font-size: 1rem;
    margin: 0;
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
  // display: flex;
  // flex-direction: column;
  // border: 1px solid;'

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    width: 10rem;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
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
