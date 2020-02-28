import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signout } from "../../../__redux/actions/authActions";
import { fireCandleModal, fireLineModal, firePieModal } from "../../../__redux/actions/modalActions";
import { Wrapper, ClientMenu, MainArea, GraphContainer, MenuImage, MenuGroupArea, MenuDescription, BodyWrapper, StyledImgLogo } from "./styledEmployeeAccount";
import ContainerGraphView from "../../View/containerGraphView";
import { faSignOutAlt, faChartLine, faChartPie, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { getInfo } from "../../../__redux/actions/userInfoActions";
import CandleModal from '../../ModalGroup/candleModal';
import LineModal from '../../ModalGroup/lineModal';
import PieModal from '../../ModalGroup/pieModal';
import { ToggleDarkMode } from '../../../__config/theme';
import { darkModeToggler } from "../../../__redux/actions/darkModeAction";
import { CheckDarkMode } from "../../../__config/theme";
import Toggle from '../../../__misc/js/ts/tcom';

const EmployeeAccount = ({ getinfo, userInfo, signout, fireCandleModal, fireLineModal, firePieModal, candTogg, lineTogg, pieTogg, dmToggler }) => {
  const [logo, setLogo] = useState("");
  const [compContColor, setCompContColor] = useState("");
  const [compFontColor, setCompFontColor] = useState("");
  const [compNavColor,  setCompNavColor] = useState("");
  // const [fullName, setFullName] = useState("");


  useEffect(() => {
    getinfo()
    setLogo(userInfo.logo);
    if (CheckDarkMode()) {
      setCompContColor(userInfo.companyDarkContainerColor)
      setCompFontColor(userInfo.companyDarkFontColor)
      setCompNavColor(userInfo.companyDarkNavbarColor)
    } else {
      setCompContColor(userInfo.companyLightContainerColor)
      setCompFontColor(userInfo.companyLightFontColor)
      setCompNavColor(userInfo.companyLightNavbarColor)
    }
  }, [
    userInfo.logo,
    userInfo.companyLightContainerColor,
    userInfo.companyLightFontColor,
    userInfo.companyLightNavbarColor,
    userInfo.companyDarkContainerColor,
    userInfo.companyDarkFontColor,
    userInfo.companyDarkNavbarColor,
    // userInfo.fullName,
    getinfo
  ]);

  const darkModeBtn = (e) => {
    dmToggler();
    ToggleDarkMode();
    
    if (CheckDarkMode()) {
      setCompContColor(userInfo.companyDarkContainerColor)
      setCompFontColor(userInfo.companyDarkFontColor)
      setCompNavColor(userInfo.companyDarkNavbarColor)
    } else {
      setCompContColor(userInfo.companyLightContainerColor)
      setCompFontColor(userInfo.companyLightFontColor)
      setCompNavColor(userInfo.companyLightNavbarColor)
    }
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
        <MainArea>
          <ClientMenu navColor={compNavColor}>
            <MenuGroupArea>
              <StyledImgLogo src={logo} alt="website logo" />
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickCandleViewer}>
              <MenuImage fcolor={compFontColor} icon={faChartBar} />
              <MenuDescription fcolor={compFontColor}>Currency</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickPieViewer}>
              <MenuImage fcolor={compFontColor} icon={faChartPie} />
              <MenuDescription fcolor={compFontColor}>Trends</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickLineViewer}>
              <MenuImage fcolor={compFontColor} icon={faChartLine} />
              <MenuDescription fcolor={compFontColor}>Earnings</MenuDescription>
            </MenuGroupArea>
            {candTogg ? <CandleModal></CandleModal> : null}
            {lineTogg ? <LineModal></LineModal> : null}
            {pieTogg ? <PieModal></PieModal> : null}
           <MenuGroupArea>
              <Toggle ocl={darkModeBtn} id="checkbox" type="checkbox" />
            </MenuGroupArea>
            <MenuGroupArea onClick={logoutBtn}>
              <MenuImage fcolor={compFontColor} icon={faSignOutAlt} />
              <MenuDescription fcolor={compFontColor} >Logout</MenuDescription>
            </MenuGroupArea>
          </ClientMenu>
          <GraphContainer compContColor={compContColor}>
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
