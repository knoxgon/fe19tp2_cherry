import styled from 'styled-components'
import Theme from "../../__config/theme";

export const EmployeeForm = styled.form`
display: flex;
flex-direction: column;
width: 20rem;
height: 10rem;
justify-content: center;
align-items: center;
margin-left: 10rem;
margin-top: 8rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    input{
      width: 90%;
      margin-left: 1rem;
      margin-bottom: 1rem;
    }
    button{
      display: block;
      margin: auto;
      background-color: black;
    }
  }
`;

export const EmployeeInput = styled.input`
padding: 1rem;
width: 30rem;
background: ${props => props.fcolor};
`;

export const Button = styled.button`
align-items: center;
width: 8rem; 
background-color: ${props => props.btcolor};
cursor: pointer;
`;


