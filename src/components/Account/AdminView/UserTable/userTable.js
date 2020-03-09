import React from "react";

import { connect } from "react-redux";
import {Wrapper, Styles, TableHead} from './styledUserTable';


const UserTable = ({users, theme}) => {
  return (
    <Wrapper>
      <Styles>
        <Table>
          <thead>
            <tr>
              <TableHead fcolor={theme.fontColor}>#</TableHead>
              <TableHead fcolor={theme.fontColor}>Fullname</TableHead>
              <TableHead fcolor={theme.fontColor}>Role</TableHead>
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
        </Table>
      </Styles>
    </Wrapper>
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.admininfo.users,
    theme: state.darkModeToggler.activeTheme
  }
}

export default connect(mapStateToProps)(UserTable);
