import React, { useEffect, useState } from 'react';
import IconAddUser from "../../../assets/account/adduser.svg";
import IconListUsers from "../../../assets/account/listusers.svg";
import IconLogout from '../../../assets/account/logout.svg';
import { connect } from 'react-redux';
import { signout } from '../../../__redux/actions/authActions';
import { Wrapper, FeatureWrapper, ClientCompanyLogo,  MainArea, FeatureContainer, ClientArea, ClientNameArea, FeatureImage, FeatureArea, FeatureDescription, BorderUnderline } from './styledAdminAccount';
import { getInfo } from '../../../__redux/actions/userInfoActions';
import AddEmployee from '../../AddEmployee/addEmployee';


const AdminAccount = ({ userinfo, signout, info, userprofile }) => {
  const [logo, setLogo] = useState('')
  const [stateAddUser, setStateAddUser] = useState(false)
  const [stateDisplayUser, setStateDisplayUser] = useState(false)

  const logutBtn = () => {
    signout()
  }

  useEffect(() => {
    info();
    setLogo(userinfo.logo);
    console.log('admin hej')

    return () => {
      setLogo('')
    }
  }, [info, userinfo.logo])

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
      <ClientArea>
        <ClientCompanyLogo src={logo} />
        <ClientNameArea>{userprofile.firstname + ' ' + userprofile.lastname}</ClientNameArea>
      </ClientArea>
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
          
          <FeatureArea onClick={() => logutBtn()}>
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    userprofile: state.firebase.profile,
    userinfo: state.userinfo.info
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    info: () => dispatch(getInfo()),
    signout: () => dispatch(signout())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminAccount);
