import React, { useEffect, useState } from 'react';
import IconAddUser from "../../assets/account/adduser.svg";
import IconListUsers from "../../assets/account/listusers.svg";
import IconBarChart from '../../assets/account/barchart.svg';
import IconApi from '../../assets/account/api.svg';
import IconLogout from '../../assets/account/logout.svg';
import { connect } from 'react-redux';
import { signout } from '../../__redux/actions/authActions';
import { Wrapper, FeatureWrapper, ClientCompanyLogo,  MainArea, FeatureContainer, ClientArea, ClientNameArea, FeatureImage, FeatureArea, FeatureDescription, BorderUnderline } from './styledAccount';
import { getInfo } from '../../__redux/actions/userInfoActions';
import AddClient from '../AddClient/addClient';


const Account = ({ userinfo, signout, info, userprofile }) => {
  const [img, setImg] = useState(null)
  const [stateAddUser, setStateAddUser] = useState(false)
  const [stateDisplayUser, setStateDisplayUser] = useState(false)

  const logutBtn = () => {
    signout()
  }
  useEffect(() => {
    info();
    setImg(userinfo);
    return () => {
      setImg(null)
    }
  }, [userinfo, signout, info, userprofile])

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
        <ClientCompanyLogo src={img} />
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

          <FeatureArea>
            <FeatureImage src={IconBarChart} />
            <FeatureDescription>Generate graph</FeatureDescription>
          </FeatureArea>

          <FeatureArea>
            <FeatureImage src={IconApi} />
            <FeatureDescription>Get data</ FeatureDescription>
          </FeatureArea>
          
          <FeatureArea onClick={() => logutBtn()}>
            <FeatureImage src={IconLogout} />
            <FeatureDescription>Sign out</FeatureDescription>
          </FeatureArea>
        </FeatureWrapper>

        <FeatureContainer>
          {stateAddUser ? <AddClient></AddClient> : null}
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


export default connect(mapStateToProps, mapDispatchToProps)(Account);
