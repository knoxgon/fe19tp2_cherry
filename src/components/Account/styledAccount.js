import styled from 'styled-components';
import Theme from "../../__config/theme";

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


const FeatureDescription = styled.p`
  user-select: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 2rem;
  color: black;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin: 0;
    margin-left: 2rem;
  }
`;


const BorderUnderline = styled.div`
  margin: 2rem 4rem 2rem 4rem;
  height: 0.1rem;
  background-color: black;
`;


const MainArea = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    flex-direction: column;
  }
`;

export {
  MainArea,
  BorderUnderline,
  Wrapper,
  FeatureDescription,
  FeatureImage,
}
