import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Logo from "../../assets/logo_transparent.png";
import Theme from "../../__config/theme";
import * as IconesSolid from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  Nav,
  MenuItems,
  A,
  AccountA,
  StyledLogo,
  Menu,
  StyledImgLogo
} from "./styledNavbar";

const Navbar = props => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [logo, setLogo] = useState("");
  const [companyColor, setCompanyColor] = useState("");
  const [fullName, setFullName] = useState("");

  const mediaQuery = window.matchMedia(
    "(max-width: " + Theme.screenSize.xsmall + ")"
  );

  const listenerMobileSize = event => {
    setIsMobile(event.matches);
  };

  useEffect(() => {
    mediaQuery.addListener(listenerMobileSize);
    if (!props.userInfo.logo) {
      setCompanyColor(Theme.colors.beige);
      setLogo(Logo);
      setFullName("Account");
    } else {
      setLogo(props.userInfo.logo);
      setCompanyColor(props.userInfo.companyColor);
      setFullName(props.userInfo.fullName);
    }

    return () => {
      mediaQuery.removeListener(listenerMobileSize);
      setLogo(Logo);
      setCompanyColor(Theme.colors.beige);
      setFullName("Account");
    };
  }, [
    mediaQuery,
    props.userInfo.logo,
    props.userInfo.companyColor,
    props.userInfo.fullName
  ]);

  const menuBtnClick = () => {
    setIsMobile(isMobile);
    setShowMenu(!showMenu);
  };

  const renderMenu = () => {
    if (props.authStatus) {
      if ((isMobile && showMenu) || !isMobile) {
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
        <Link to="/account">{fullName}</Link>
      </AccountA>
      <i>
        <Menu onClick={menuBtnClick} icon={IconesSolid.faBars} />
      </i>
    </Nav>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.userinfo.info,
    authStatus: state.firebase.auth.isEmpty
  };
};

export default connect(mapStateToProps, null)(Navbar);
