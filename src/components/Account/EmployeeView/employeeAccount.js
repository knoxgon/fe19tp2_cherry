import React, { useState } from "react";
import IconGraphGroup from "../../../assets/employee/graph-menu.svg";
import IconCandle from "../../../assets/employee/candle.svg";
import IconLine from "../../../assets/employee/line.svg";
import IconPie from "../../../assets/employee/pie.svg";
import { connect } from "react-redux";
import { signout } from "../../../__redux/actions/authActions";
import { fireCandleModalAction } from "../../../__redux/actions/modalActions";
import { SubMenuItemDescription, SubMenuItemImg, LeftSideFeatureAdapter, Wrapper, FeatureWrapper, MainArea, FeatureContainer, FeatureImage, FeatureArea, FeatureDescription, BorderUnderline, LeftSideItemArea } from "./styledEmployeeAccount";
import ContainerCandleView from "../../../View/containerCandleView";
import CandleModal from '../../CandleModal/candleModal';

const EmployeeAccount = ({ signout, fireCandleModal }) => {
  const [showLeftList, setShowLeftList] = useState(false);

  const logutBtn = () => {
    signout();
  };

  const toggleDisplayGraph = () => {
    setShowLeftList(!showLeftList)
  }

  const onClickCandleViewer = () => {
    fireCandleModal();
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
              <SubMenuItemDescription>Candle</SubMenuItemDescription>
            </LeftSideItemArea>
            <LeftSideItemArea>
              <SubMenuItemImg src={IconPie}></SubMenuItemImg>
              <SubMenuItemDescription>Pie</SubMenuItemDescription>
            </LeftSideItemArea>
            <LeftSideItemArea>
              <SubMenuItemImg src={IconLine}></SubMenuItemImg>
              <SubMenuItemDescription>Line</SubMenuItemDescription>
            </LeftSideItemArea>
          </LeftSideFeatureAdapter>
        </FeatureWrapper>
        <FeatureContainer>
          <CandleModal></CandleModal>
          <ContainerCandleView></ContainerCandleView>
        </FeatureContainer>
      </MainArea>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signout()),
    fireCandleModal: () => dispatch(fireCandleModalAction())
  };
};

export default connect(null, mapDispatchToProps)(EmployeeAccount);
