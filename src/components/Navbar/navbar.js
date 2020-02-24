import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Logo from "../../assets/logo_transparent.png";
import Theme, { CheckDarkMode } from "../../__config/theme";
import * as IconesSolid from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getInfo } from '../../__redux/actions/userInfoActions';
import { ToggleDarkMode } from '../../__config/theme';

import {
  Nav,
  MenuItems,
  A,
  AccountA,
  StyledLogo,
  Menu,
  StyledImgLogo,
  CheckBoxLabel,CheckBoxWrapper,CheckBox
} from "./styledNavbar";

const Navbar = ({ userInfo, isGuest, getinfo}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [logo, setLogo] = useState("");
  const [companyColor, setCompanyColor] = useState("");
  const [fullName, setFullName] = useState("");

  
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: " + Theme.screenSize.xsmall + ")");
    const listenerMobileSize = event => {
      setIsMobile(!event.matches);
    };
    mediaQuery.addListener(listenerMobileSize);
    return () => {
      mediaQuery.removeListener(listenerMobileSize);
    }
  }, [])

  useEffect(() => {
    getinfo()
    if (isGuest) {
      setCompanyColor(Theme.colors.beige);
      setLogo(Logo);
      setFullName("Account");
    } else {
      setLogo(userInfo.logo);

      let color 
      if (CheckDarkMode()) {
        color = userInfo.companyColorDark
      } else {
        color = userInfo.companyColor
      }

      setCompanyColor(color);
      setFullName(userInfo.fullName);
    }

    return () => {
      setLogo(Logo);
      setCompanyColor(Theme.colors.beige);
      setFullName("Account");
    };
  }, [
    isGuest,
    userInfo.logo,
    userInfo.companyColor,
    userInfo.companyColorDark,
    userInfo.fullName,
    getinfo
  ]);

  const menuBtnClick = () => {
    setIsMobile(isMobile);
    setShowMenu(!showMenu);
  };


const darkModeBtn = () => {
  ToggleDarkMode(); 
};

  const renderMenu = () => {
    if(isGuest) {
      if ((showMenu && !isMobile) || isMobile) {
        return (
          <MenuItems>
            <A>
              <Link to="/">Home</Link>
            </A>
            <A>
              <Link to="/solutions">Solutions</Link>
            </A>
            <A>
              <Link to="/about">About</Link>
            </A>
          </MenuItems>
        );
      }
    }
  };

  return (
    <Nav navColor={companyColor}>
      <StyledLogo>
        <StyledImgLogo src={logo} alt="website logo" />
      </StyledLogo>
      {renderMenu()}
      <AccountA>
      <CheckBoxWrapper>
        <CheckBox onChange={darkModeBtn} id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper> 
      
        <Link to="/account">{fullName}</Link>
      </AccountA>
      { isGuest && <i> <Menu onClick={menuBtnClick} icon={IconesSolid.faBars} /> </i> }
    </Nav>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.userinfo.info,
    isGuest: state.firebase.auth.isEmpty
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getinfo: () => dispatch(getInfo())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
