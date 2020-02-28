import styled from 'styled-components';
import Theme from "../../../__config/theme";

const FeatureArea = styled.div`
  // display: inline-flex;
  vertical-align: middle;
  margin-bottom: 2rem;
  width: 15.5rem;
  cursor: pointer;


  &:nth-last-child(3) {
    width: 21.7rem;

    @media screen and (max-width: ${Theme.screenSize.xsmall}) {
      margin-left: 4rem;
      width: 5rem;
    }
  }

  &:nth-last-child(4) {
    width: 17.6rem;

    @media screen and (max-width: ${Theme.screenSize.xsmall}) {

      width: 5rem;
    }
  }

  &:nth-last-child(1) {
    margin-top: 20rem;

    @media screen and (max-width: ${Theme.screenSize.xsmall}) {
      margin-top: 0rem;
      width: 5rem;
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
    width: 2rem;
    margin-left: 5rem;
  }

`;

const FeatureWrapper = styled.div`

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-left: 5rem;
  width: 50rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin: 0;
    padding: 0;
    padding-bottom: 10rem;
    margin-bottom: 7.5rem;
    width: 100%;
  }
`;

export {
  FeatureArea,
  FeatureWrapper,
  FeatureContainer
}
