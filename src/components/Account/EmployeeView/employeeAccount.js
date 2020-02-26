import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signout } from "../../../__redux/actions/authActions";
import { fireCandleModal, fireLineModal, firePieModal } from "../../../__redux/actions/modalActions";
import { SubMenuItemDescription, SubMenuItemImg, LeftSideFeatureAdapter, Wrapper, ClientMenu, MainArea, FeatureContainer, MenuImage, MenuGroupArea, MenuDescription, BorderUnderline, LeftSideItemArea, BodyWrapper } from "./styledEmployeeAccount";
import ContainerGraphView from "../../View/containerGraphView";
import CandleModal from '../../ModalGroup/candleModal';
import LineModal from '../../ModalGroup/lineModal';
import PieModal from '../../ModalGroup/pieModal';
import { faSignOutAlt, faChartLine, faChartArea, faChartPie, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { getInfo } from "../../../__redux/actions/userInfoActions";
import Theme from "../../../__config/theme";
import { StyledLogo, StyledImgLogo } from "../../Navbar/styledNavbar";

const EmployeeAccount = ({ getinfo, userInfo, signout, fireCandleModal, fireLineModal, firePieModal }) => {
  const [showLeftList, setShowLeftList] = useState(false);
  const [logo, setLogo] = useState("");
  const [companyColor, setCompanyColor] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    getinfo()
    setLogo(userInfo.logo);
    setCompanyColor(userInfo.companyColor);
    setFullName(userInfo.fullName);

    return () => {
    };
  }, [
    userInfo.logo,
    userInfo.companyColor,
    userInfo.fullName,
    getinfo
  ]);

  const logoutBtn = () => {
    signout();
  };

  const toggleDisplayGraph = () => {
    setShowLeftList(!showLeftList)
  }

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
            <MenuGroupArea onClick={toggleDisplayGraph}>
              <MenuImage icon={faChartArea} />
              <MenuDescription>Graph</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={toggleDisplayGraph}>
              <MenuImage icon={faChartArea} />
              <MenuDescription>Graph</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={toggleDisplayGraph}>
              <MenuImage icon={faChartArea} />
              <MenuDescription>Graph</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={toggleDisplayGraph}>
              <MenuImage icon={faChartArea} />
              <MenuDescription>Graph</MenuDescription>
            </MenuGroupArea>
            <LeftSideFeatureAdapter toggle={showLeftList}>
              <LeftSideItemArea onClick={onClickCandleViewer}>
                <SubMenuItemImg icon={faChartBar}></SubMenuItemImg>
                <SubMenuItemDescription>Currency</SubMenuItemDescription>
              </LeftSideItemArea>
              <LeftSideItemArea onClick={onClickPieViewer}>
                <SubMenuItemImg icon={faChartPie}></SubMenuItemImg>
                <SubMenuItemDescription>Trends</SubMenuItemDescription>
              </LeftSideItemArea>
              <LeftSideItemArea onClick={onClickLineViewer}>
                <SubMenuItemImg icon={faChartLine}></SubMenuItemImg>
                <SubMenuItemDescription>Earnings</SubMenuItemDescription>
              </LeftSideItemArea>
            </LeftSideFeatureAdapter>
            <MenuGroupArea style={{'marginTop': 'auto', 'marginBottom': '1rem'}} onClick={logoutBtn}>
              <MenuImage icon={faSignOutAlt} />
              <MenuDescription>Logout</MenuDescription>
            </MenuGroupArea>
          </ClientMenu>
          <FeatureContainer>
            <ContainerGraphView></ContainerGraphView>
          </FeatureContainer>
        </MainArea>
      </Wrapper>
    </BodyWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userinfo.info
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
