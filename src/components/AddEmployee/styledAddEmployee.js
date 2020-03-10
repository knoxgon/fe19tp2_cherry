import styled from 'styled-components'
import Theme from "../../__config/theme";

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: fit-content;
  @media screen and (max-width: ${Theme.deviceSize.ipad.w}){
    width: 95vw;
  }
`;

export const FormDescription = styled.legend`
  font-size: 2.5rem;
  font-weight: bold;
  color: blue;
`;

export const FormFieldset = styled.fieldset`
  padding: 5rem;
  border-color: #d4e1ff;
  @media screen and (max-width: ${Theme.deviceSize.nokia.w}){
    padding: 0rem;
  }
`;

export const EmployeeForm = styled.form`
  text-align: center;
`;

export const EmployeeInput = styled.input`
  padding: 1rem;
  width: 30rem;
  background: ${props => props.fcolor};
`;

export const AError = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: blue;
  font-weight: 700;
`;

export const Button = styled.button`
  align-items: center;
  width: 50%;
  cursor: pointer;
  border: none;
  margin-top: 2.5rem;
  background-color: #b9c8e6;
  height: 3rem;
  color: #5858bd;
  font-size: 1.75rem;
  font-weight: 600;
  border-radius: 30px;
`;


