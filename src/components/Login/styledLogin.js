import styled from 'styled-components';
import Theme from '../../__config/theme';


const LoginContainerArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginArea = styled.form`
  align-items: center;
  border-radius: 1rem;
  text-align: center;
  border: 1px solid #dddddd;
  width: 45rem;
  height: 53rem;
  margin-top: 5rem;

  background: #E8CBC0;  
  background: -webkit-linear-gradient(to top, #636FA4, #E8CBC0);
  background: linear-gradient(to top, #636FA4, #E8CBC0);
  
  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    width: 100vw;
    height: 100vh;
    margin:0;
  }
`;

const LoginLogo = styled.img`
  text-align: center;
  width: 20rem;
  height: 20rem;
  margin-bottom: 3.5rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    width: 15rem;
    height: auto;
    margin-bottom: 2rem;
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 35rem;
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    width: 25rem;
    margin-top: 2rem;
  }
`;

const InputImage = styled.img`
  width: 3rem;
  height: 5rem;
  
  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    width: 2.3rem;
    height: 5rem;
  }
`;

const EmailInput = styled.input`
  font-family: 'Roboto Condensed', sans-serif;

  border-radius: 0.5rem;
  width: 28rem;
  height: 4rem;
  margin-left: 1rem;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline-color: none;
  font-size: 2rem;
  outline: none;

  background: #C9D6FF;
  background: -webkit-linear-gradient(to top, #E2E2E2, #C9D6FF);
  background: linear-gradient(to top, #E2E2E2, #C9D6FF);
  
  &::placeholder {
    padding: 1rem;
    color: #3f3f3f;
  }

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    font-size: 1.8rem;
  }
`;

const LoginButton = styled.button`
  text-align: center;
  margin: 0 auto;
  width: 25rem;
  height: 4rem;
  margin-top: 1.5rem;
  color: #29293d;
  font-size: 2.5rem;
  border-radius: 2rem;
  border: none;

  background: #C9D6FF;
  background: -webkit-linear-gradient(to top, #E2E2E2, #C9D6FF);
  background: linear-gradient(to top, #E2E2E2, #C9D6FF); 

  &:hover {
    cursor: pointer;
    transition: 0.3s ease;
    color: #3f3f3f;
  }

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    margin-top: 16rem;
    font-size: 2.2rem;
    width: 18rem;
  }
`;

const ErrorArea = styled.div`
  margin: 0 auto;
  margin-top: 2.5rem;
  text-align: center;
  width: auto;
  height: 3rem;
  color: #ffeaea;
  font-size: 1.3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: 400;
`;

const ForgotPassword = styled.a`

  display: flex;
  text-align: right;
  justify-content: flex-end;
  margin-right: 8rem;
  color: #ffeaea;
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 26.4rem;

@media screen and (max-width: ${Theme.screenSize.xsmall}) {

  font-size: 1.3rem;
  margin: 0;
  margin-right: 6.5rem;
}
`;


export {
  LoginArea,
  LoginLogo,
  InputArea,
  InputImage,
  EmailInput,
  LoginButton,
  ErrorArea,
  LoginContainerArea,
  ForgotPassword
}
