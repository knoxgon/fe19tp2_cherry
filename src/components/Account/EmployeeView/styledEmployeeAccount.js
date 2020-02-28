import styled from 'styled-components';
import Theme from "../../../__config/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BodyWrapper = styled.div`
  padding: 0rem;
  background-color: #F4F8F9;
`;

export const StyledImgLogo = styled.img`
  width: 10rem;

  @media screen and (max-width: ${Theme.screenSize.small}) {
    width: 5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  box-shadow: 1px 0px 0px 0px rgba(0,0,0,0.04);
  @media screen and (max-width: ${Theme.screenSize.small}) {
  }
`;

export const MenuImage = styled(FontAwesomeIcon)`
  user-select: none;
  font-size: 3.25rem;
  transition: all 0.75s linear;
  color: ${props => props.fcolor};

  @media screen and (max-width: ${Theme.screenSize.small}) {
    
  }
`;

export const MenuGroupArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  margin-top: 2.5rem;
  margin-bottom: 5rem;
  cursor: pointer;

  &:first-child {
    margin-top: 0;

    @media screen and (max-width: ${Theme.screenSize.small}) {
      margin-top: initial;
    }
  }

  &:last-child {
    margin-top: auto;
    margin-bottom: 1rem;
    transform: scale(1.0);

    @media screen and (max-width: ${Theme.screenSize.small}) {
      margin-top: inherit;
      margin-bottom: inherit;
      transform: scale(1.0);
    }
  }

  &:hover {
    transform: scale(1.1);

    @media screen and (max-width: ${Theme.screenSize.small}) {
      transform: scale(1);
    }
  }

  @media screen and (max-width: ${Theme.screenSize.small}) {
    width: auto;
    margin-top: inherit;
    margin-bottom: inherit;
    flex-flow: nowrap;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MenuDescription = styled.span`
  user-select: none;
  font-size: 1.5rem;
  transition: all 0.75s linear;
  color: ${props => props.fcolor};
  font-weight: 400;

  @media screen and (max-width: ${Theme.screenSize.small}){
    display:none;
  }
`;

export const ClientMenu = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 10rem;
  height: 100vh;
  box-shadow: 1px 0px 0px 0px rgba(0,0,0,0.04);
  transition: all 0.75s linear;
  background: ${props => props.navColor};

  @media screen and (max-width: ${Theme.screenSize.small}){
    flex-flow: wrap;
    justify-content: flex-start;
    width: 100vw;
    height: 5rem;
    align-self: flex-end;
    border-right: unset;
    border-top: inset;
    justify-content: space-around;
    order: 1;
  }
`;

export const MainArea = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${Theme.screenSize.small}){
    flex-direction: column;
  }
`;

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: initial;
  flex-grow: 1;
  overflow: scroll;
  background-color: ${props => props.compContColor};
  transition: all 0.75s linear;
  width: calc(100vw - 10rem);
  
  &::-webkit-scrollbar{
    width: 0;
    height: 0;
  }

  @media screen and (max-width: ${Theme.screenSize.small}){
    margin: 0;
    padding: 0;
    width: 100vw;
    flex-direction: column;
  }
`;
