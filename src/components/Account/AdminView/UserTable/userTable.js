import React from "react";
import { connect } from "react-redux";
import {Wrapper, Styles, TableHead, TableCell} from './styledUserTable';


const UserTable = ({users, theme}) => {
  return (
    <Wrapper>
      <Styles>
        <table style={{border: '1px solid black'}}>
          <thead>
            <tr>
              <TableHead bcolor={theme.navColor} fcolor={theme.fontColor}>#</TableHead>
              <TableHead bcolor={theme.navColor} fcolor={theme.fontColor}>Fullname</TableHead>
              <TableHead bcolor={theme.navColor} fcolor={theme.fontColor}>Role</TableHead>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return <tr key={i}>
                  <TableCell bcolor={theme.navColor} fcolor={theme.fontColor}>{i+1}</TableCell>
                  <TableCell bcolor={theme.navColor} fcolor={theme.fontColor}>{user.fullname}</TableCell>
                  <TableCell bcolor={theme.navColor} fcolor={theme.fontColor}>{user.role}</TableCell>
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
    users: state.admininfo.users,
    theme: state.darkModeToggler.activeTheme
  }
}

export default connect(mapStateToProps)(UserTable);
