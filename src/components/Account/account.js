import React, { useEffect, useState } from 'react';
import IconAddUser from "../../assets/account/adduser.svg";
import IconBarChart from '../../assets/account/barchart.svg';
import IconApi from '../../assets/account/api.svg';
import IconLogout from '../../assets/account/logout.svg';
import { connect } from 'react-redux';
import { signout } from '../../__redux/actions/authActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Wrapper, FeatureWrapper, ClientCompanyLogo, ClientArea, ClientNameArea, FeatureImage, FeatureArea, FeatureDescription, BorderUnderline } from './styledAccount';
import { getInfo } from '../../__redux/actions/userInfoActions';

const Account = ({ userinfo, signout, info, userprofile }) => {
  const [img, setImg] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const logutBtn = () => {
    signout()
  }
  useEffect(() => {
    info();
    setImg(userinfo);
    setLoaded(true);
    return () => {
      setImg(null)
    }
  }, [userinfo, signout, info, userprofile])
  
  return (
    loaded ? 
    <Wrapper>
      <ClientArea>
        <ClientCompanyLogo src={img} />
        <ClientNameArea>{userprofile.firstname + ' ' + userprofile.lastname}</ClientNameArea>
      </ClientArea>
      <BorderUnderline></BorderUnderline>

      <FeatureWrapper>
        <FeatureArea>
          <FeatureImage src={IconAddUser} />
          <FeatureDescription>Add user</FeatureDescription>
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
    </Wrapper> : null
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'clients' }
  ])
)(Account);
