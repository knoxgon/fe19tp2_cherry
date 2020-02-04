import React from 'react';
import SparbankenLogo from "../Images/new-swedbank-transparent.png";
import AddUser from "../Images/add-user.png";
import * as IconesSolid from '@fortawesome/free-solid-svg-icons';
import ApiIcon from '../Images/API-icon.png'


import {
  Wrapper, 
  SparbankenImg,
  Styleddiv,
  StyledH2,
  StyledAddUser,
  UserFunctionDiv,
  StyledP,
  StyledGraph,
  StyledLogout,
  LogoutDiv,
  StyledApiIcon,
  StyledPtag
  
} from './styledAccount';



class Account extends React.Component {

  render() {
    return (
      <Wrapper>
            
         <Styleddiv>
         <SparbankenImg src ={SparbankenLogo}/>
         <StyledH2>Fredrik Åhlberg</StyledH2>
          
         
           </Styleddiv>

      <UserFunctionDiv>
        <StyledAddUser src = {AddUser} />
        <StyledP>Add user</StyledP>
      </UserFunctionDiv>

      <UserFunctionDiv>
      <i><StyledGraph icon={IconesSolid.faChartBar}/></i>
      <StyledP>Generate graph</StyledP>
      </UserFunctionDiv>

      <UserFunctionDiv>
      <i><StyledApiIcon src = {ApiIcon}/></i>
      <StyledPtag>Get data</ StyledPtag>
      </UserFunctionDiv>


      <LogoutDiv>
      <i><StyledLogout icon={IconesSolid.faSignOutAlt}/></i>
      <StyledP>Sign out</StyledP>
      </LogoutDiv>

      </Wrapper>
    );
  }
}


export default Account;