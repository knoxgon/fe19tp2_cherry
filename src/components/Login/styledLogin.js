import styled from 'styled-components';
import Theme from '../../__config/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginContainerArea = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  background: #E8CBC0;
  background: linear-gradient(to top, #636FA4, #E8CBC0);

  @media only screen and (max-height: 400px) and (orientation: landscape) {
    height: initial;
  }
`;

export const LoginArea = styled.form`
  text-align: center;
`;

export const LoginLogo = styled.img`
  text-align: center;
  width: 20rem;
  height: 20rem;
  margin-bottom: 3.5rem;

  @media only screen and (min-height: 700px) and (orientation: portrait) {
    margin-top: 5rem;
    width: 30rem;
    height: 30rem;
  }
  @media only screen and (max-height: 450px) and (orientation: landscape) {
    margin-top: 0rem;
    width: 15rem;
    height: 15rem;
  }
`;

export const InputArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${Theme.deviceSize.iph5SE.w} and (max-width: ${Theme.deviceSize.iph678P.w})) {
    width: 75vw;
    margin-top: 2rem;
  }
`;

export const InputImage = styled(FontAwesomeIcon)`
  position: absolute;
  color: #44293a;
  font-size: 2.5rem;
  left: 1rem;
`;

export const Input = styled.input`
  font-family: 'Roboto Condensed', sans-serif;
  border-radius: 0.5rem;
  width: 27rem;
  height: 4rem;
  border: none;
  outline-color: none;
  font-size: 2rem;
  outline: none;
  background: #C9D6FF;
  background: linear-gradient(to top, #E2E2E2, #C9D6FF);
  padding-left: 4rem;
  
  &::placeholder {
    color: #44293a;
  }

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    font-size: 1.8rem;
  }
`;

export const LoginButton = styled.button`
  text-align: center;
  width: 25rem;
  height: 4rem;
  color: #44293a;
  font-size: 2.5rem;
  border-radius: 2rem;
  border: none;

  background: #C9D6FF;
  background: linear-gradient(to top, #E2E2E2, #C9D6FF); 

  &:hover {
    cursor: pointer;
    transition: 0.3s ease;
    color: #3f3f3f;
  }
`;

export const ErrorArea = styled.div`
  margin: 0 auto;
  margin-top: 2.5rem;
  text-align: center;
  width: auto;
  height: 3rem;
  color: #4e1717;
  font-size: 1.75rem;
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: 900;
`;

export const RecoverPasswordField = styled.a`
  display: flex;
  text-align: right;
  justify-content: flex-end;
  color: #ffeaea;
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
  color: #2f2b28;
  font-weight: 600;
`;

export const RecoverPasswordFieldWrapper = styled.div`
  width: 31.5rem;
  justify-content: flex-end;
  margin: 0 auto;
`;

export const LoginButtonWrapper = styled.div`
  justify-content: center;
  margin: 0 auto;
  margin-top: 5rem;
  width: 31.5rem;
`;
