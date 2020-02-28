import React, { useState } from 'react';
import IconAddUser from "../../../assets/account/adduser.svg";
import IconListUsers from "../../../assets/account/listusers.svg";
import IconLogout from '../../../assets/account/logout.svg';
import { connect } from 'react-redux';
import { signout } from '../../../__redux/actions/authActions';
import { FeatureContainer,FeatureArea,FeatureWrapper } from './styledAdminAccount';

import {
  MainArea,BorderUnderline,Wrapper,FeatureDescription,FeatureImage} from '../styledAccount'
import AddEmployee from '../../AddEmployee/addEmployee';


const AdminAccount = ({ signout }) => {
  const [stateAddUser, setStateAddUser] = useState(false)
  const [stateDisplayUser, setStateDisplayUser] = useState(false)

  const logutBtn = () => {
    signout()
  }

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
      <BorderUnderline></BorderUnderline>

      <MainArea>
        <FeatureWrapper>
          <FeatureArea onClick={toggleStateAddUser}>
            <FeatureImage src={IconAddUser} />
            <FeatureDescription>Add user</FeatureDescription>
          </FeatureArea>

          <FeatureArea onClick={toggleStateDisplayUser}>
            <FeatureImage src={IconListUsers} />
            <FeatureDescription>Show users</FeatureDescription>
          </FeatureArea>
          
          <FeatureArea onClick={logutBtn}>
            <FeatureImage src={IconLogout} />
            <FeatureDescription>Sign out</FeatureDescription>
          </FeatureArea>
        </FeatureWrapper>

        <FeatureContainer>
          {stateAddUser ? <AddEmployee></AddEmployee> : null}
        </FeatureContainer>
      </MainArea>

    </Wrapper>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout())
  }
}


export default connect(null, mapDispatchToProps)(AdminAccount);
