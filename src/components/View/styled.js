import styled from 'styled-components'
import Theme from '../../__config/theme';

export const MCCloser = styled.img`
  cursor: pointer;
  position: relative;
  width: 5rem;
  height: 5rem;
  &:hover {
    transform: scale(1.3);
  }
`;

export const GMArea = styled.div`
  position: relative;
  background-color: white;
  margin: 3.5rem auto;
  margin-left: 3.5rem;
  width: 60rem;
  height: 60rem;
  opacity: 0.9;
  border: 1px solid #dddddd;
  border-radius: 1rem;
  box-shadow: -12px 10px 5px 0px rgba(221,221,221,1);
  
  @media screen and (max-width: ${Theme.screenSize.large}){
    margin-left: 0rem;
  }
  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    margin-left: 0rem;
    height: 50rem;
    width: 40rem;
  }
  transition: all .8s ease-in-out;
  &:hover {
    transform: scale(1.050);
    @media screen and (max-width: ${Theme.screenSize.xsmall}) {
      -webkit-transition: none;
      transform: scale(1.0);
    }
  }
`;

export const GMTitle = styled.div`
  position: relative;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  padding-bottom: 5rem;
  color: ${props => props.color};
`;

export const GMTop = styled.div`
  position: relative;
  font-size: 2rem;
  font-weight: 900;
  text-align: right;
`;
