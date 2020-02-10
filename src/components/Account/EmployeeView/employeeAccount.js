import React, { useEffect, useState } from 'react';
import IconBarChart from '../../../assets/account/barchart.svg';
import IconApi from '../../../assets/account/api.svg';
import IconLogout from '../../../assets/account/logout.svg';
import { connect } from 'react-redux';
import { signout } from '../../../__redux/actions/authActions';
import { Wrapper, FeatureWrapper, ClientCompanyLogo,  MainArea, FeatureContainer, ClientArea, ClientNameArea, FeatureImage, FeatureArea, FeatureDescription, BorderUnderline } from './styledEmployeeAccount';
import { getInfo } from '../../../__redux/actions/userInfoActions';


const EmployeeAccount = ({ userinfo, signout, info, userprofile }) => {
  const [logo, setLogo] = useState('')

  const logutBtn = () => {
    signout()
  }

  useEffect(() => {
    info();
    setLogo(userinfo.logo);
    return () => {
      setLogo('')
    }
  }, [info, userinfo.logo])

  return (
    <Wrapper>
      <ClientArea>
        <ClientCompanyLogo src={logo} />
        <ClientNameArea>{userprofile.firstname + ' ' + userprofile.lastname}</ClientNameArea>
      </ClientArea>
      <BorderUnderline></BorderUnderline>

      <MainArea>
        <FeatureWrapper>
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


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAccount);
