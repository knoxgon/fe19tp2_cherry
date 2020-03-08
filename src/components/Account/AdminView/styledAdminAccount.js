import styled from 'styled-components';
import Theme from "../../../__config/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminNav = styled.div`
display: flex; 
flex-direction: row; 
margin-top: 0; 
width: 100vw;
height: 8rem; 
background: linear-gradient(to right, #dbe6f6, #c5796d); 
justify-content: flex-end;
`

const AdminMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10rem;
  height: 100%;
  margin-left: 0;
`;

const FeatureArea = styled.div`
  display: flex; 
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  width: 10rem;
  font-size: 3rem;

  &:nth-last-child(3) {
    width: 10rem;
    margin-top: 10rem;

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

const FeatureContainer = styled.div`
  display: flex;

  background: ${props => props.bcolor};

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin: 0;
    padding: 0;
    padding-bottom: 10rem;
    margin-bottom: 7.5rem;
    width: 100%;
  }
`;
const MenuImage = styled(FontAwesomeIcon)`
  width: 3rem;
  user-select: none;
  font-size: 3.25rem;
  transition: all 0.75s linear;

  @media screen and (max-width: ${Theme.screenSize.small}) {
    font-size: 2.25rem
  }
`;

export {
  AdminMenu, 
  AdminNav,
  FeatureArea,
  FeatureContainer,
  MenuImage
}
