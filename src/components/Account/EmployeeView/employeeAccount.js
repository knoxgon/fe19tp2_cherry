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

const EmployeeAccount = ({ getinfo, userInfo, signout, fireCandleModal, fireLineModal, firePieModal, candTogg, lineTogg, pieTogg }) => {
  const [logo, setLogo] = useState("");
  const [companyColor, setCompanyColor] = useState("");
  // const [fullName, setFullName] = useState("");

  useEffect(() => {
    getinfo()
    setLogo(userInfo.logo);
    setCompanyColor(userInfo.companyColor);
    // setFullName(userInfo.fullName);

    return () => {
    };
  }, [
    userInfo.logo,
    userInfo.companyColor,
    // userInfo.fullName,
    getinfo
  ]);

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
            <MenuGroupArea>
              <StyledImgLogo src={logo} alt="website logo" />
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickCandleViewer}>
              <MenuImage icon={faChartBar} />
              <MenuDescription>Currency</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickPieViewer}>
              <MenuImage icon={faChartPie} />
              <MenuDescription>Trends</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickLineViewer}>
              <MenuImage icon={faChartLine} />
              <MenuDescription>Earnings</MenuDescription>
            </MenuGroupArea>
            {candTogg ? <CandleModal></CandleModal> : null}
            {lineTogg ? <LineModal></LineModal> : null}
            {pieTogg ? <PieModal></PieModal> : null}
            <MenuGroupArea onClick={logoutBtn}>
              <MenuImage icon={faSignOutAlt} />
              <MenuDescription>Logout</MenuDescription>
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
    pieTogg: state.pieModalToggler.toggle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    fireCandleModal: () => dispatch(fireCandleModal()),
    fireLineModal: () => dispatch(fireLineModal()),
    firePieModal: () => dispatch(firePieModal()),
    getinfo: () => dispatch(getInfo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAccount);
