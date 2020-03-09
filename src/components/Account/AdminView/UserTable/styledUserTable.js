import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
`;

export const Styles = styled.div`
  padding: 1rem;
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
    th,
    
    td {
      margin: 0;
      padding: 1.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    td {
      :last-child:not(:first-child) {
        text-align: center;
        border-right: 0;
        color: red;
        font-weight: 1000;
        cursor: pointer;
      }
    }
  }
`;

export const TableHead = styled.th`

color: ${props => props.fcolor};


`;

export const Table = styled.table`



`;
