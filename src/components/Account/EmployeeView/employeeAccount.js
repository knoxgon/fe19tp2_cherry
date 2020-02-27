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
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import containerGraphView from "../../View/containerGraphView";

const EmployeeAccount = ({ getinfo, userInfo, signout, fireCandleModal, fireLineModal, firePieModal, candTogg, lineTogg, pieTogg }) => {
  const [logo, setLogo] = useState("");
  const [companyColor, setCompanyColor] = useState("");
  const [content, setContent] = useState("");
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
  // const getListStyle = isDraggingOver => ({
  //   background: isDraggingOver ? "lightblue" : "lightgrey",
  //   // display: grid,
  //   //padding: grid,
  //   //width: 250
  // });

  // const getItemStyle = (isDragging, draggableStyle) => ({
  //   // some basic styles to make the items look a bit nicer
  //   userSelect: "none",
  //   // padding: grid * 2,
  //   // margin: `0 0 ${grid}px 0`,

  //   // change background colour if dragging
  //   background: isDragging ? "lightgreen" : "",

  //   // styles we need to apply on draggables
  //   ...draggableStyle
  // });

  // const grid = 8;

  const dragContext = result => {
    if(!result.destination) {
      return;
    }
    //Det räcker med denna, alltså, från och med här kommer det att kräva en koppling till containern.
    // ok, sen manipulera det och lägg tillbaka det nya 'reordered' objekt
    // jag vet inte hur jag ska koppla containern, hur jag än gör så blir det inte rätt...
    //Jag gör samtidigt switch knappen som vi ska ha för color theme,
    //Ge över uppgiften så gör jag, bra jobbat hittils, :) pusha till branchen så ska jag fixa resten
    

    // const content = reorder(containern, result.source.index, result.destination.index);
  }
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

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
            <DragDropContext onDragUpdate={dragContext} onDragEnd={dragContext}>
              <Droppable droppableId="dropid">
                {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{'display': 'flex', 'flexWrap': 'wrap'}}
                >
                <ContainerGraphView></ContainerGraphView>
                {provided.placeholder}
                </div> )}
              </Droppable>
            </DragDropContext>
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
