
import React from 'react';
import SparbankenLogo from "../Images/new-swedbank-transparent.png";
import * as IconesSolid from '@fortawesome/free-solid-svg-icons';
import ApiIcon from '../Images/API-icon.png'


import {
  Wrapper,
  SparbankenImg,
  Styleddiv,
  StyledH2,
  UserFunctionDiv,
  StyledP,
  StyledGraph,
  StyledLogout,
  LogoutDiv,
  StyledApiIcon,
  StyledPtag,
  BorderUnderline

} from './styledUser';



class User extends React.Component {

  logutBtn() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <Wrapper>

        <Styleddiv>
          <SparbankenImg src={SparbankenLogo} />
          <StyledH2>Ronja Nyström</StyledH2>
        </Styleddiv>

        <BorderUnderline></BorderUnderline>


        <UserFunctionDiv>
          <i><StyledGraph icon={IconesSolid.faChartBar} /></i>
          <StyledP>Generate graph</StyledP>
        </UserFunctionDiv>

        <UserFunctionDiv>
          <i><StyledApiIcon src={ApiIcon} /></i>
          <StyledPtag>Get data</ StyledPtag>
        </UserFunctionDiv>

        <LogoutDiv>
          <i><StyledLogout onClick={() => this.logutBtn()} icon={IconesSolid.faSignOutAlt} /></i>
          <StyledP>Sign out</StyledP>
        </LogoutDiv>

      </Wrapper>
    );
  }
}

export default User;