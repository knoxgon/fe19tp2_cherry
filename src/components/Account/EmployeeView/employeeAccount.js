import React, { useState } from "react";
import IconGraphGroup from "../../../assets/employee/graph-menu.svg";
import IconLogout from "../../../assets/account/logout.svg";
import IconCandle from "../../../assets/employee/candle.svg";
import IconLine from "../../../assets/employee/line.svg";
import IconPie from "../../../assets/employee/pie.svg";
import { connect } from "react-redux";
import { signout } from "../../../__redux/actions/authActions";
import { fireCandleModal, fireLineModal, firePieModal } from "../../../__redux/actions/modalActions";
import { SubMenuItemDescription, SubMenuItemImg, LeftSideFeatureAdapter, Wrapper, FeatureWrapper, MainArea, FeatureContainer, FeatureImage, FeatureArea, FeatureDescription, BorderUnderline, LeftSideItemArea } from "./styledEmployeeAccount";
import ContainerGraphView from "../../View/containerGraphView";
import CandleModal from '../../ModalGroup/candleModal';
import LineModal from '../../ModalGroup/lineModal';
import PieModal from '../../ModalGroup/pieModal';

const EmployeeAccount = ({ signout, fireCandleModal, fireLineModal, firePieModal }) => {
  const [showLeftList, setShowLeftList] = useState(false);

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
    <Wrapper>
      <BorderUnderline></BorderUnderline>
      <MainArea>
        <FeatureWrapper>
          <FeatureArea onClick={toggleDisplayGraph}>
            <FeatureImage src={IconGraphGroup} />
            <FeatureDescription>Generate graph</FeatureDescription>
          </FeatureArea>
          <LeftSideFeatureAdapter toggle={showLeftList}>
            <LeftSideItemArea onClick={onClickCandleViewer}>
              <SubMenuItemImg src={IconCandle}></SubMenuItemImg>
              <SubMenuItemDescription>OHLC</SubMenuItemDescription>
            </LeftSideItemArea>
            <LeftSideItemArea onClick={onClickPieViewer}>
              <SubMenuItemImg src={IconPie}></SubMenuItemImg>
              <SubMenuItemDescription>Trends</SubMenuItemDescription>
            </LeftSideItemArea>
            <LeftSideItemArea onClick={onClickLineViewer}>
              <SubMenuItemImg src={IconLine}></SubMenuItemImg>
              <SubMenuItemDescription>Earnings</SubMenuItemDescription>
            </LeftSideItemArea>
          </LeftSideFeatureAdapter>
          <FeatureArea onClick={logoutBtn}>
            <FeatureImage src={IconLogout} />
            <FeatureDescription>Logout</FeatureDescription>
          </FeatureArea>
          <React.Fragment>
            <CandleModal></CandleModal>
            <LineModal></LineModal>
            <PieModal></PieModal>
          </React.Fragment>
        </FeatureWrapper>
        <FeatureContainer>
          <ContainerGraphView></ContainerGraphView>
        </FeatureContainer>
      </MainArea>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    fireCandleModal: () => dispatch(fireCandleModal()),
    fireLineModal: () => dispatch(fireLineModal()),
    firePieModal: () => dispatch(firePieModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAccount);
