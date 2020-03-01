import React from "react";
import { connect } from "react-redux";
import { signout } from "../../../__redux/actions/authActions";
import { fireCandleModal, fireLineModal, firePieModal } from "../../../__redux/actions/modalActions";
import { Wrapper, ClientMenu, UserElement, TopMenu, MainArea, GraphContainer, TopMenuGroupArea, MenuImage, MenuGroupArea, MenuDescription, BodyWrapper, StyledImgLogo } from "./styledEmployeeAccount";
import ContainerGraphView from "../../View/containerGraphView";
import { faSignOutAlt, faChartLine, faChartPie, faChartBar } from "@fortawesome/free-solid-svg-icons";
import CandleModal from '../../ModalGroup/candleModal';
import LineModal from '../../ModalGroup/lineModal';
import PieModal from '../../ModalGroup/pieModal';
import { ToggleDarkMode } from '../../../__config/theme';
import { darkModeToggler } from "../../../__redux/actions/darkModeAction";
import Toggle from '../../../__misc/js/ts/tcom';
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { bmwhen } from "../../../__redux/actions/containerActions";

const EmployeeAccount = ({ comp, theme, userInfo, signout, fireCandleModal, fireLineModal, firePieModal, candTogg, lineTogg, pieTogg, bmteffect, dmToggler }) => {
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
  const onDragEnd = (result) => {
    if (!result.destination)
      return;
    bmteffect(result.source.index, result.destination.index)
  }
  
  return (
    <BodyWrapper>
      <Wrapper>
        <TopMenu navColor={theme.navColor}>
          <TopMenuGroupArea>
            <StyledImgLogo comptype={comp} src={userInfo.logo} alt="website logo" />
          </TopMenuGroupArea>
          <TopMenuGroupArea>
            <Toggle ocl={darkModeBtn} />
          </TopMenuGroupArea>
          <TopMenuGroupArea>
            <UserElement fcolor={theme.fontColor}>{userInfo.fullName}</UserElement>
          </TopMenuGroupArea>
        </TopMenu>
        <MainArea>
          <ClientMenu navColor={theme.navColor}>
            <MenuGroupArea onClick={onClickCandleViewer}>
              <MenuImage fcolor={theme.fontColor} icon={faChartBar} />
              <MenuDescription fcolor={theme.fontColor}>Currency</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickPieViewer}>
              <MenuImage fcolor={theme.fontColor} icon={faChartPie} />
              <MenuDescription fcolor={theme.fontColor}>Trends</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={onClickLineViewer}>
              <MenuImage fcolor={theme.fontColor} icon={faChartLine} />
              <MenuDescription fcolor={theme.fontColor}>Earnings</MenuDescription>
            </MenuGroupArea>
            <MenuGroupArea onClick={logoutBtn}>
              <MenuImage fcolor={theme.fontColor} icon={faSignOutAlt} />
              <MenuDescription fcolor={theme.fontColor} >Logout</MenuDescription>
            </MenuGroupArea>
          </ClientMenu>
          <DragDropContext style={{'overflow': 'scroll'}} onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
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
    comp: state.firebase.profile.company
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    fireCandleModal: () => dispatch(fireCandleModal()),
    fireLineModal: () => dispatch(fireLineModal()),
    firePieModal: () => dispatch(firePieModal()),
    dmToggler: () => dispatch(darkModeToggler()),
    bmteffect: (a, c) => dispatch(bmwhen(a,c))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAccount);
