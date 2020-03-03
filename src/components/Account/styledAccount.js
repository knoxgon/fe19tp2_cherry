import styled from 'styled-components';
import Theme from "../../__config/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  width: 100vw;
  /* height: 100;  */
  background-color: #F4F8F9;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    margin-top: 2rem;
    margin-left: 0rem;
    margin-right: 0rem;
  }
`;

const FeatureImage = styled(FontAwesomeIcon)`
  margin-left: 2rem;
  user-select: none;
  width: 5rem;
  height: 5rem;
  cursor: pointer;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    display: flex;
    flex-direction: row;
    width: 5.5rem;
    height: 5.5rem;
    margin-left: 2rem;
  }
`;


const FeatureDescription = styled.p`
  margin-left: 1.2rem;
  justify-content: center;
  user-select: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;

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
