import React from "react";

import styled from "styled-components";
import { connect } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
`;

const Styles = styled.div`
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
`

const UserTable = ({users}) => {
  return (
    <Wrapper>
      <Styles>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Fullname</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return <tr>
                  <td>{i+1}</td>
                  <td>{user.fullname}</td>
                  <td>{user.role}</td>
                </tr>
            })}
          </tbody>
        </table>
      </Styles>
    </Wrapper>
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.admininfo.users
  }
}

export default connect(mapStateToProps)(UserTable);
