import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signout } from "../../../__redux/actions/authActions";
import { fireCandleModal, fireLineModal, firePieModal } from "../../../__redux/actions/modalActions";
import { Wrapper, ClientMenu, MainArea, GraphContainer, MenuImage, MenuGroupArea, MenuDescription, BodyWrapper, StyledImgLogo, CheckBox, CheckBoxWrapper, CheckBoxLabel } from "./styledEmployeeAccount";
import ContainerGraphView from "../../View/containerGraphView";
import { faSignOutAlt, faChartLine, faChartPie, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { getInfo } from "../../../__redux/actions/userInfoActions";
import CandleModal from '../../ModalGroup/candleModal';
import LineModal from '../../ModalGroup/lineModal';
import PieModal from '../../ModalGroup/pieModal';
import { ToggleDarkMode } from '../../../__config/theme';
import { darkModeToggler } from "../../../__redux/actions/darkModeAction";
import Theme, { CheckDarkMode, color } from "../../../__config/theme";

const EmployeeAccount = ({ fontColor, backgroundColor, getinfo, userInfo, signout, fireCandleModal, fireLineModal, firePieModal, candTogg, lineTogg, pieTogg, dmToggler, navbarIconColor, ...props }) => {
  const [logo, setLogo] = useState("");
  const [companyColor, setCompanyColor] = useState("");
  // const [fullName, setFullName] = useState("");


  useEffect(() => {
    getinfo()
    setLogo(userInfo.logo);
    setCompanyColor(userInfo.companyColor);
    let color
    if (CheckDarkMode()) {
      color = userInfo.companyColorDark
    } else {
      color = userInfo.companyColor
    }
    setCompanyColor(color);
    // setFullName(userInfo.fullName);

    return () => {
    };

  }, [
    userInfo.logo,
    userInfo.companyColor,
    userInfo.companyColorDark,
    // userInfo.fullName,
    getinfo
  ]);

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('DarkMode')) === true){
      document.getElementById('checkbox').checked = true
    }
    else
      document.getElementById('checkbox').checked = false
  })


  const darkModeBtn = (e) => {
    dmToggler();
    ToggleDarkMode();
    let color
    if (CheckDarkMode()) {
      color = userInfo.companyColorDark
    } else {
      color = userInfo.companyColor
    }
    setCompanyColor(color);
  };

  const logoutBtn = () => {
    signout();
  };

  const onClickCandleViewer = () => {
    fireCandleModal();
  }
  const onClickLineViewer = () => {
    fireLineModal();
  }
  const onClickPieViewer = () => {
    firePieModal();
  }

  return (
    <BodyWrapper>
      <Wrapper>
        <MainArea style = {{background: backgroundColor}}>
          <ClientMenu navColor={companyColor}>
            <MenuGroupArea>
              <StyledImgLogo src={logo} alt="website logo" />
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickCandleViewer}>
              <MenuImage style = {{ color: fontColor }} icon={faChartBar} />
              <MenuDescription style={{ color: fontColor }}>Currency</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickPieViewer}>
              <MenuImage style = {{ color: fontColor}} icon={faChartPie} />
              <MenuDescription style={{ color: fontColor }}>Trends</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickLineViewer}>
              <MenuImage style = {{ color: fontColor}} icon={faChartLine} />
              <MenuDescription style={{ color: fontColor }}>Earnings</MenuDescription>
            </MenuGroupArea>
            {candTogg ? <CandleModal></CandleModal> : null}
            {lineTogg ? <LineModal></LineModal> : null}
            {pieTogg ? <PieModal></PieModal> : null}
           <CheckBoxWrapper>
              <CheckBox onChange={darkModeBtn} id="checkbox" type="checkbox" />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
            <MenuGroupArea onClick={logoutBtn}>
              <MenuImage style = {{ color: navbarIconColor}} icon={faSignOutAlt} />
              <MenuDescription style={{ color: fontColor }}>Logout</MenuDescription>
            </MenuGroupArea>
          </ClientMenu>
          <GraphContainer style = {{ background: backgroundColor }}>
            <ContainerGraphView></ContainerGraphView>
          </GraphContainer>
        </MainArea>
      </Wrapper>
    </BodyWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userinfo.info,
    candTogg: state.candleModalToggler.toggle,
    lineTogg: state.lineModalToggler.toggle,
    pieTogg: state.pieModalToggler.toggle,
    fontColor: state.darkModeToggler.color.colors.fontColor,
    navbarIconColor: state.darkModeToggler.color.colors.navbarIconColor,
    backgroundColor: state.darkModeToggler.color.colors.backgroundColor,
    isDmToggler: state.darkModeToggler.toggle
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    fireCandleModal: () => dispatch(fireCandleModal()),
    fireLineModal: () => dispatch(fireLineModal()),
    firePieModal: () => dispatch(firePieModal()),
    getinfo: () => dispatch(getInfo()),
    dmToggler: () => dispatch(darkModeToggler())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAccount);
