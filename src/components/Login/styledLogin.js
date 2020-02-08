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
  background-color: ${Theme.colors.beige};
  
  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    width: 28rem;
    height: 44rem;
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

const UsernameInput = styled.input`
  font-family: 'Roboto Condensed', sans-serif;
  background-color: white;
  border-radius: 0.5rem;
  width: 28rem;
  height: 4rem;
  margin-left: 1rem;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline-color: gray;
  font-size: 2rem;
  
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
  margin-top: 7.5rem;
  color: white;
  background-color: #364f6b;
  font-size: 2.5rem;
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    margin-top: 5rem;
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
  color: #d50000;
  font-size: 1.3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: 600;
`;


export {
  LoginArea,
  LoginLogo,
  InputArea,
  InputImage,
  UsernameInput,
  LoginButton,
  ErrorArea,
  LoginContainerArea
}
