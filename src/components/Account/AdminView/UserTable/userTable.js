import React from "react";
import { connect } from "react-redux";
import {Wrapper, Styles, TableHead, TableCaption, TableCell} from './styledUserTable';
import { removeUser } from "../../../../__redux/actions/userInfoActions";


const UserTable = ({users, theme, removeuser}) => {
  const onClickRemoveUser = (name, id) => {
    if(window.confirm(`Are you sure to delete ${name}?`)) {
      removeuser(id)
    }
  }
  return (
    <Wrapper>
      <Styles>
        <table>
          <TableCaption>Users</TableCaption>
          <thead>
            <tr>
              <TableHead bcolor={theme.navColor} fcolor={theme.fontColor}>#</TableHead>
              <TableHead bcolor={theme.navColor} fcolor={theme.fontColor}>Fullname</TableHead>
              <TableHead bcolor={theme.navColor} fcolor={theme.fontColor}>Role</TableHead>
              <TableHead bcolor={theme.navColor} fcolor={theme.fontColor}>Remove</TableHead>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return <tr key={i}>
                  <TableCell bcolor={theme.navColor} fcolor={theme.fontColor}>{i+1}</TableCell>
                  <TableCell bcolor={theme.navColor} fcolor={theme.fontColor}>{user.fullname}</TableCell>
                  <TableCell bcolor={theme.navColor} fcolor={theme.fontColor}>{user.role}</TableCell>
                  <TableCell bcolor={theme.navColor} fcolor={theme.fontColor} onClick={() => onClickRemoveUser(user.fullname, user.id)}>X</TableCell>
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeuser: (id) => dispatch(removeUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
