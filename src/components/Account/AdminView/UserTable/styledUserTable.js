import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;

  border: none;
  
`;

export const Styles = styled.div`
  padding: 1rem;
  border: none;
  table {
    border-spacing: 0;
    border: 1px solid black;
    
    tr {
      :last-child {
        td {
          border-bottom: 0;
      }
    }
  }
}
`;

export const TableHead = styled.th`
  background-color: ${props => props.bcolor};
  color: ${props => props.fcolor};
`;

export const TableCell = styled.td`
  margin: 0;
  padding: 1.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  color: ${props => props.fcolor};
  background-color: ${props => props.bcolor};

  th, 
  td {
    :last-child:not(:first-child) {
      text-align: center;
      border-right: 0;
      color: red;
      font-weight: 1000;
    }
  }
`;
