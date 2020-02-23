import styled from 'styled-components'

export const MCCloser = styled.img`
  cursor: pointer;
  position: relative;
  left: 90%;
  top: 0;
  width: 5rem;
  height: 5rem;
  &:hover {
    transform: scale(1.3);
  }
`;

export const GMArea = styled.div`
  position: relative;
  margin: 3.5rem auto;
  width: 55rem;
  height: auto;
  opacity: 0.9;
  border: 1px solid;
`;
