import styled from 'styled-components';
import Theme from '../../__config/theme';

const EmployeeForm = styled.form`
  background-color: ${Theme.colors.whiteToGrey};
  @media screen and (max-width: ${Theme.screenSize.xsmall}){
    margin: 0;
    padding: 0;
    max-width: 90vw;
  
  }
`;

export {
  EmployeeForm
}
