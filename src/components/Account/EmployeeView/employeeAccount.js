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
import { ToggleDarkMode } from '../../__config/theme';
import { darkModeToggler } from "../../__redux/actions/darkModeAction";

const EmployeeAccount = ({ getinfo, userInfo, signout, fireCandleModal, fireLineModal, firePieModal, candTogg, lineTogg, pieTogg ...props }) => {
  const [logo, setLogo] = useState("");
  const [companyColor, setCompanyColor] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    getinfo()
    if (isGuest) {
      setCompanyColor(Theme.color.grey);
      setLogo(Logo);
      setFullName("Account");
    } else {
      setLogo(userInfo.logo);
      setFullName(userInfo.fullName);
      let color 
      if (CheckDarkMode()) {
        color = userInfo.companyColorDark
      } else {
        color = userInfo.companyColor
      }
      setCompanyColor(color);
    }

    return () => {
      setLogo(Logo);
      setCompanyColor(Theme.color.grey);
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


const darkModeBtn = () => {
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
        <MainArea>
          <ClientMenu navColor={companyColor}>
            <MenuGroupArea style={{'marginTop': '0'}}>
              <StyledImgLogo src={logo} alt="website logo" />
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickCandleViewer}>
              <MenuImage icon={faChartBar} />
              <MenuDescription style = {{ color: props.fontColor}}>Currency</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickPieViewer}>
              <MenuImage icon={faChartPie} />
              <MenuDescription style = {{ color: props.fontColor}}>Trends</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickLineViewer}>
              <MenuImage icon={faChartLine} />
              <MenuDescription style = {{ color: props.fontColor}}>Earnings</MenuDescription>
            </MenuGroupArea>
            {candTogg ? <CandleModal></CandleModal> : null}
            {lineTogg ? <LineModal></LineModal> : null}
            {pieTogg ? <PieModal></PieModal> : null}
            <MenuGroupArea style={{'marginTop': 'auto', 'marginBottom': '1rem', 'transform': 'scale(1.0)'}} onClick={logoutBtn}>
              <MenuImage icon={faSignOutAlt} />
              <CheckBoxWrapper>
        <CheckBox onChange={darkModeBtn} id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper> 
              <MenuDescription style = {{ color: props.fontColor}}>Logout</MenuDescription>
            </MenuGroupArea>
          </ClientMenu>
          <GraphContainer>
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
