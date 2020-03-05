import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackToSignInWrapper = styled.div`
  width: 31.5rem;
  justify-content: flex-end;
  margin: 0 auto;
`;

export const BackToSignIn = styled(Link)`
  display: flex;
  text-align: center;
  justify-content: center;
  color: #ffeaea;
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
  color: #000;
  font-weight: 600;
  margin-top: 6rem;
  margin-left: 2rem;
`;

