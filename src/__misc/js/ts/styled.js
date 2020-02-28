import styled from 'styled-components';

export const SwitchWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  outline: none;
  width: 6rem;
  border-radius: 3rem;
  background: ${props => props.bgcol};
  border: 2px solid ${props => props.brcol};
  overflow: hidden;

  img {
    max-width: 2rem;
    height: auto;
    transition: all 0.5s linear;

    &:first-child {
      transform: ${props => props.dark ? 'translateX(-200%)' : 'translateX(0)'};
    }

    &:last-child {
      transform: ${props => props.dark ? 'translateX(0%)': 'translateX(200%)'}
    }
  }
`;
