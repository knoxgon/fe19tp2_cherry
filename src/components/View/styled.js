import styled from 'styled-components'
import Theme from '../../__config/theme';
import { Resizable } from 're-resizable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';

export const GraphFeature = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 2.75rem;
  color: ${props => props.fcolor};
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
  &:first-child {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
  &:last-child {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
  transition: all 0.75s linear;
  opacity: 0.5;
`;

export const GraphFeatureHold = styled(GraphFeature)`
  cursor: grab;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

export const GMCircle = styled.div`
  margin-left: 2rem;
  margin-top: 2rem;
  height: fit-content;

  @media screen and (max-width: ${Theme.screenSize.small}){
    &:first-child {
      margin-left: 0rem;
    }
    margin-left: 0.25rem;
  }
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

export const AGMButton = styled.button`
  border: none;
  outline: none;
  background-color: ${props => props.bcolor};
  margin-right: 1rem;
`;

export const StockPrice = styled.div`
  position: absolute;
  font-size: 2.25rem;
  left: 0.5rem;
  top: 1rem;
  font-weight: 700;
  color: ${props => props.isDark ? '#00ff1f' : '#218228'};
`;

export const GMTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 0.75rem;
  color: ${props => props.color};
  transition: 0.75s ease;
`;

export const GMSelect = styled(Select)`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  width: 17rem;
  padding-bottom: 0.75rem;
  outline: none;
  transition: 0.75s ease;
`;

export const GMTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 900;
`;

export const GMRH = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0.5;
  border-bottom: 0.5rem solid ${props => props.fcolor};
  border-right: 0.5rem solid ${props => props.fcolor};
  height: 0.75rem;
  width: 0.75rem;
`;
