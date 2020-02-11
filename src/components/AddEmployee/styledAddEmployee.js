import styled from 'styled-components'
import Theme from '../../__config/theme';


const EmployeeForm = styled.form`


@media screen and (max-width: ${Theme.screenSize.xsmall}){

  input{
    width: 90%;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  button{
    display: block;
    margin: auto;
  }
}

`;

export {
    EmployeeForm
}