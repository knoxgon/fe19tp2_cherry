import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { signout } from '../../../__redux/actions/authActions';
import { faUserPlus, faUsers,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { BodyWrapper, Wrapper, TopMenu, StyledImgLogo, TopMenuGroupArea, MainArea, MenuGroupArea, MenuDescription, MenuImage, ClientMenu } from '../EmployeeView/styledEmployeeAccount';
import { ToggleDarkMode } from '../../../__config/theme';
import { darkModeToggler } from "../../../__redux/actions/darkModeAction";
import Toggle from '../../../__misc/js/ts/tcom';
import { FeatureContainer } from './styledAdminAccount';
import AddEmployee from '../../AddEmployee/addEmployee';
import UserTable from './UserTable/userTable';
import { getUsers } from '../../../__redux/actions/userInfoActions';

const AdminAccount = ({ userview, comp, theme, userInfo, signout, dmToggler }) => {
  const [stateAddUser, setStateAddUser] = useState(false)
  const [stateDisplayUser, setStateDisplayUser] = useState(false)

  useEffect(() => {
    userview()
  }, [userview])

  const darkModeBtn = (e) => {
    dmToggler();
    ToggleDarkMode();
  };

  const logoutBtn = () => {
    signout();
  };

  const toggleStateAddUser = () => {
    setStateDisplayUser(false)
    setStateAddUser(!stateAddUser)
  }
  const toggleStateDisplayUser = () => {
    setStateAddUser(false)
    setStateDisplayUser(!stateDisplayUser)
  }

  return (
  <BodyWrapper>
    <Wrapper>
      <TopMenu navColor={theme.navColor}>
        <TopMenuGroupArea>
          <StyledImgLogo comptype={comp} src={userInfo.logo} alt="website logo" />
        </TopMenuGroupArea>
        <TopMenuGroupArea>
            <Toggle ocl={darkModeBtn} />
          </TopMenuGroupArea>
      </TopMenu>
      <MainArea>
        <ClientMenu navColor={theme.navColor}>
          <MenuGroupArea onClick={toggleStateAddUser}>
            <MenuImage fcolor={theme.fontColor} icon={faUserPlus}></MenuImage>
            <MenuDescription fcolor={theme.fontColor}>Add User</MenuDescription>
          </MenuGroupArea>
          <MenuGroupArea onClick={toggleStateDisplayUser}>
            <MenuImage fcolor={theme.fontColor} icon={faUsers}></MenuImage>
            <MenuDescription fcolor={theme.fontColor}>Show Users</MenuDescription>
          </MenuGroupArea>
          <MenuGroupArea onClick={logoutBtn}>
            <MenuImage fcolor={theme.fontColor} icon={faSignOutAlt} />
            <MenuDescription fcolor={theme.fontColor}>Logout</MenuDescription>
          </MenuGroupArea>
        </ClientMenu>
        <FeatureContainer bcolor={theme.contColor}>
          {stateAddUser ? <AddEmployee></AddEmployee> : null}
          {stateDisplayUser ? <UserTable></UserTable> : null}
        </FeatureContainer>
      </MainArea>
    </Wrapper>
  </BodyWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userinfo.info,
    theme: state.darkModeToggler.activeTheme,
    comp: state.firebase.profile.company
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    dmToggler: () => dispatch(darkModeToggler()),
    userview: () => dispatch(getUsers())
  };
};  

export default connect(mapStateToProps, mapDispatchToProps)(AdminAccount);
