import styled from 'styled-components'
import Theme from '../../__config/theme';
import { Resizable } from 're-resizable';

export const MCCloser = styled.img`
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  &:hover {
    transform: scale(1.3);
  }
`;

export const GMCircle = styled.div`
  margin-left: 2rem;
  margin-top: 2rem;
  height: fit-content;
`;

export const GMArea = styled(Resizable)`
  background-color: white;
  opacity: 0.9;
  border-radius: 0.5rem;

  background: ${props => props.bcolor};
  
  @media screen and (max-width: ${Theme.screenSize.small}){
    margin-left: 0.25rem;
    margin-top: 0.25rem;
  }
`;

export const GMTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 0.75rem;
  color: ${props => props.color};
  transition: 0.6s ease; // change color slower when toggling dark mode
`;

export const GMTop = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  text-align: right;
`;

export const GMRH = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom: 0.5rem solid orange;
  border-right: 0.5rem solid orange;
  height: 0.75rem;
  width: 0.75rem;
`;
