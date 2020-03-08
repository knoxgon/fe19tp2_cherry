import React from "react";
import { connect } from "react-redux";
import { signout } from "../../../__redux/actions/authActions";
import { fireCandleModal, fireLineModal, firePieModal, fireAreaModal } from "../../../__redux/actions/modalActions";
import { Wrapper, ClientMenu, HelperWizard, UserElement, TopMenu, MainArea, GraphContainer, TopMenuGroupArea, MenuImage, MenuGroupArea, MenuDescription, BodyWrapper, StyledImgLogo } from "./styledEmployeeAccount";
import ContainerGraphView from "../../View/containerGraphView";
import { faSignOutAlt, faChartLine, faChartArea, faChartPie, faChartBar, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import CandleModal from '../../ModalGroup/candleModal';
import LineModal from '../../ModalGroup/lineModal';
import PieModal from '../../ModalGroup/pieModal';
import AreaModal from '../../ModalGroup/areaModal';
import { ToggleDarkMode } from '../../../__config/theme';
import { darkModeToggler } from "../../../__redux/actions/darkModeAction";
import Toggle from '../../../__misc/js/ts/tcom';
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { bmwhen } from "../../../__redux/actions/containerActions";
import QTogg from "../../../__misc/js/qt";
import { HQToggler } from "../../../__redux/actions/qtriggerAction";


const EmployeeAccount = ({ comp, theme, userInfo, signout, hqSwitch, fireCandleModal, fireLineModal, firePieModal, fireAreaModal, areaTogg, candTogg, lineTogg, pieTogg, bmteffect, dmToggler }) => {
  const darkModeBtn = (e) => {
    dmToggler();
    ToggleDarkMode();
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
  const onClickAreaViewer = () => {
    fireAreaModal();
  }
  const onDragEnd = (result) => {
    if (!result.destination)
      return;
    bmteffect(result.source.index, result.destination.index)
  }
  const toggleTutor = () => {
    hqSwitch();
  }
  
  return (
    <BodyWrapper>
      <Wrapper>
        <TopMenu navColor={theme.navColor}>
          <TopMenuGroupArea>
            <StyledImgLogo comptype={comp} src={userInfo.logo} alt="website logo" />
          </TopMenuGroupArea>
          <TopMenuGroupArea onClick={toggleTutor}>
            <HelperWizard icon={faQuestionCircle} fcolor={theme.fontColor} />
          </TopMenuGroupArea>
          <TopMenuGroupArea>
            <Toggle ocl={darkModeBtn} />
          </TopMenuGroupArea>
          <TopMenuGroupArea>
            <UserElement fcolor={theme.fontColor}>{userInfo.fullName}</UserElement>
          </TopMenuGroupArea>
        </TopMenu>
        <MainArea>
          <QTogg></QTogg>
          <ClientMenu navColor={theme.navColor}>
            <MenuGroupArea onClick={onClickCandleViewer}>
              <MenuImage fcolor={theme.fontColor} icon={faChartBar} />
              <MenuDescription fcolor={theme.fontColor}>Currency</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickPieViewer}>
              <MenuImage fcolor={theme.fontColor} icon={faChartPie} />
              <MenuDescription fcolor={theme.fontColor}>Investment</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickAreaViewer}>
              <MenuImage fcolor={theme.fontColor} icon={faChartArea} />
              <MenuDescription fcolor={theme.fontColor}>Stock</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickLineViewer}>
              <MenuImage fcolor={theme.fontColor} icon={faChartLine} />
              <MenuDescription fcolor={theme.fontColor}>Growth</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={logoutBtn}>
              <MenuImage fcolor={theme.fontColor} icon={faSignOutAlt} />
              <MenuDescription fcolor={theme.fontColor} >Logout</MenuDescription>
            </MenuGroupArea>
          </ClientMenu>
          <DragDropContext style={{'overflow': 'scroll'}} onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction='vertical'>
              {(provided, snapshot) => (
                <GraphContainer
                  compContColor={theme.contColor}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  ><ContainerGraphView></ContainerGraphView>
                  {provided.placeholder}
                </GraphContainer>
              )}
            </Droppable>
          </DragDropContext>
        </MainArea>
      </Wrapper>
      {candTogg ? <CandleModal></CandleModal> : null}
      {lineTogg ? <LineModal></LineModal> : null}
      {pieTogg ? <PieModal></PieModal> : null}
      {areaTogg ? <AreaModal></AreaModal> : null}
    </BodyWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userinfo.info,
    theme: state.darkModeToggler.activeTheme,
    candTogg: state.candleModalToggler.toggle,
    lineTogg: state.lineModalToggler.toggle,
    pieTogg: state.pieModalToggler.toggle,
    areaTogg: state.areaModalToggler.toggle,
    comp: state.firebase.profile.company
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    fireCandleModal: () => dispatch(fireCandleModal()),
    fireLineModal: () => dispatch(fireLineModal()),
    firePieModal: () => dispatch(firePieModal()),
    fireAreaModal: () => dispatch(fireAreaModal()),
    dmToggler: () => dispatch(darkModeToggler()),
    bmteffect: (a, c) => dispatch(bmwhen(a,c)),
    hqSwitch: () => dispatch(HQToggler())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAccount);
