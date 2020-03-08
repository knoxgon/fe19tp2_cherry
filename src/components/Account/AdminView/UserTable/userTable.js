import React, { useState } from "react";

import styled from "styled-components";

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
    /* {
      th:nth-last-child(3) {
        text-align: center;
        border-right: 0;
        color: purple;
        font-weight: 1000;
        cursor: pointer;
      }
    } */
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

const UserTable = () => {
  const [users, setUsers] = useState(
    [
      {name: "Eva", role: "Employee", email: "eva@bev.com", id: "a"},
      {name: "Peter", role: "Admin", email: "peter@bev.com", id: "b"},
      {name: "Rasmus", role: "Employee", email: "rasmus@bev.com", id: "c"},
      {name: "", role: "Employee", email: "", id: "d"}    
    ])

    const deleteUser = (e) => {
      const filteredUsers = removeUser(e.target.id);
      setUsers(filteredUsers);
    }

    const removeUser = (id) => {
      return users.filter(user => user.id !== id)
    }

    const addUser = (id) => {
      return users.push()
    }

    const newUser = (e) => {
      const addedUser = addUser(e.target.id);
      setUsers(addedUser)
    }

  
  
  return (
    <Wrapper>
      <Styles>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Erase</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return <tr>
                  <td>{i+1}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td id={user.id} onClick={deleteUser}>X</td>
                </tr>
            })}
          </tbody>
        </table>
      </Styles>
    </Wrapper>
  )
};

export default UserTable;
