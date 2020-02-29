import styled from 'styled-components'
import Theme from '../../__config/theme';
import { Resizable } from 're-resizable';

export const MCCloser = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

export const GMArea = styled(Resizable)`
  width: 20rem;
  margin-left: 2rem;
  margin-top: 2rem;
  height: 20rem;
  background-color: white;
  opacity: 0.9;
  border-radius: 0.5rem;
  
  @media screen and (max-width: ${Theme.screenSize.small}){
    margin-left: 0.25rem;
    margin-top: 0.25rem;
  }
`;

export const GMTitle = styled.div`
  font-weight: 700;
  text-align: center;
  padding-bottom: 0.75rem;
  color: ${props => props.color};
`;

export const GMTop = styled.div`
  font-size: 2rem;
  font-weight: 900;
  text-align: right;
`;
