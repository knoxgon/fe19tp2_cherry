import styled from 'styled-components';

const LoginArea = styled.form`
  margin: 0 auto;
  text-align: center;
  border: 1px solid gray;

  margin-top: 1rem;
  width: 50rem;
  height: 57.5rem;
  
  background-color: #f2efef;
`;

const LoginLogo = styled.img`
  text-align: center;
  width: 20rem;
  height: 20rem;
  margin-bottom: 3.5rem;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 30rem;
  height: auto;
  margin: 0 auto;
`;

const InputImage = styled.img`
  width: 3rem;
  height: 5rem;
`;

const UsernameInput = styled.input`
  font-family: 'Roboto Condensed', sans-serif;
  background-color: #f2efef;
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
    color: #3f3f3f;
  }
`;

const LoginButton = styled.button`
  text-align: center;
  margin: 0 auto;
  width: 25rem;
  height: 4rem;
  margin-top: 7.5rem;
  color: white;
  background-color: black;
  font-size: 2.5rem;

  border-radius: 5rem;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export {
  LoginArea,
  LoginLogo,
  InputArea,
  InputImage,
  UsernameInput,
  LoginButton,
}
