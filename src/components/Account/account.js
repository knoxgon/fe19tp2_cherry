import React from 'react';
import SparbankenLogo from "../../assets/account/new-swedbank-transparent.png";
import IconAddUser from "../../assets/account/adduser.svg";
import IconBarChart from '../../assets/account/barchart.svg';
import IconApi from '../../assets/account/api.svg';
import IconLogout from '../../assets/account/logout.svg';
import { connect } from 'react-redux';
import { signout } from '../../__redux/actions/authActions';

import { Wrapper, FeatureWrapper, ClientCompanyLogo, ClientArea, ClientNameArea, FeatureImage, FeatureArea, FeatureDescription, BorderUnderline } from './styledAccount';


const Account = (props) => {
  const logutBtn = () => {
    props.signout();
  }
  
  return (
    <Wrapper>
      <ClientArea>
        <ClientCompanyLogo src={SparbankenLogo} />
        <ClientNameArea>Fredrik Åhlberg</ClientNameArea>
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
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
