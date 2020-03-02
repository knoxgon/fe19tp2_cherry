import React, { useState } from 'react';
import { faSignOutAlt, faAddressCard, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { signout } from '../../../__redux/actions/authActions';
import { AdminNav, AdminMenu, FeatureArea, FeatureContainer } from './styledAdminAccount';
import { Wrapper, FeatureDescription, FeatureImage } from '../styledAccount'
import { TopMenuGroupArea } from "../EmployeeView/styledEmployeeAccount";
import { ToggleDarkMode } from '../../../__config/theme';
import Toggle from '../../../__misc/js/ts/tcom';
import { darkModeToggler } from "../../../__redux/actions/darkModeAction";
import { bmwhen } from "../../../__redux/actions/containerActions";
import AddEmployee from '../../AddEmployee/addEmployee';


const AdminAccount = ({ signout, dmToggler }) => {
  const [stateAddUser, setStateAddUser] = useState(false)
  const [stateDisplayUser, setStateDisplayUser] = useState(false)

  const darkModeBtn = (e) => {
    dmToggler();
    ToggleDarkMode();
  };

  const logutBtn = () => {
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
    <Wrapper>
      <AdminNav>
        {/* <StyledImgLogo src={userInfo.logo} alt="bev-logo" /> */}
        <TopMenuGroupArea>
          {/* <UserElement fcolor={theme.fontColor}>{userInfo.fullName}</UserElement> */}
          <Toggle ocl={darkModeBtn} />
        </TopMenuGroupArea>
      </AdminNav>
      <AdminMenu>
        <FeatureArea onClick={toggleStateAddUser}>
          <FeatureImage icon={faUserPlus} />
            <FeatureDescription>Add user</FeatureDescription>
        </FeatureArea>
        <FeatureArea onClick={toggleStateDisplayUser}>
          <FeatureImage icon={faAddressCard} />
            <FeatureDescription>Show users</FeatureDescription>
        </FeatureArea>
        <FeatureArea onClick={logutBtn}>
          <FeatureImage icon={faSignOutAlt} />
          <FeatureDescription>Sign out</FeatureDescription>
        </FeatureArea>
      </AdminMenu>
      <FeatureContainer>
        {stateAddUser ? <AddEmployee></AddEmployee> : null}
      </FeatureContainer>
    </Wrapper>
  );
};


const mapStateToProps = (state) => {
  return {
    userInfo: state.userinfo.indo, 
    theme: state.darkModeToggler.activeTheme
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    dmToggler: () => dispatch(darkModeToggler()),
    bmteffect: (a, c) => dispatch(bmwhen(a,c))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminAccount);
