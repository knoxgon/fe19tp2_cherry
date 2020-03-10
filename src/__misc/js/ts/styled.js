import styled from 'styled-components';
import Theme from '../../../__config/theme';

export const SwitchWrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  height: 3rem;
  outline: none;
  width: 6rem;
  margin-right: 1.5rem;
  border-radius: 3rem;
  background: ${props => props.bgcol};
  border: 2px solid ${props => props.brcol};
  overflow: hidden;

  img {
    min-width: 1.5rem;
    max-width: 2rem;
    width: 2rem;
    height: auto;
    transition: all 0.5s linear;

    @media screen and (max-width: ${Theme.screenSize.small}) {
      img {
        max-width: 1.5rem;
      }
    }

    &:first-child {
      transform: ${props => props.dark ? 'translateX(-200%)' : 'translateX(0)'};
    }

    &:last-child {
      transform: ${props => props.dark ? 'translateX(0%)': 'translateX(200%)'}
    }
  }
`;
