import styled from 'styled-components';
import Theme from '../../../../__config/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.75rem;
  border: none;
`;

export const TableCaption = styled.caption`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: #1b5582;
`;

export const Styles = styled.div`
  padding: 1rem;
  border: none;
  table {
    border-spacing: 0;
    width: 35vw;
    border: 1px solid #9ba9cc;
    tr {
      text-align: center;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    @media screen and (max-width: ${Theme.deviceSize.ipad.w}) {
      width: 95vw; 
    }
  }
`;

export const TableHead = styled.th`
  background-color: #263b71;
  color: #ffffff;
  text-align: center;
  padding: 1rem;
  text-align: center;
`;

export const TableCell = styled.td`
  margin: 0;
  cursor: pointer;
  padding: 1.5rem;
  border-bottom: 1px solid #669bc3;
  color: ${props => props.fcolor};
  background-color: ${props => props.bcolor};
  :last-child:not(:first-child) {
    color: red;
    font-weight: 1000;
  }
`;
