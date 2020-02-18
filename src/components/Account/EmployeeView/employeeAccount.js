import React, { useState } from "react";
import IconBarChart from "../../../assets/account/barchart.svg";
import IconApi from "../../../assets/account/api.svg";
import IconLogout from "../../../assets/account/logout.svg";
import { connect } from "react-redux";
import { signout } from "../../../__redux/actions/authActions";
import { Wrapper, FeatureWrapper, MainArea, FeatureContainer, FeatureImage, FeatureArea, FeatureDescription, BorderUnderline } from "./styledEmployeeAccount";
import MCView from "../../../View/mcView";

const EmployeeAccount = ({ signout }) => {
  const [showGraph, setShowGraph] = useState(false)

  const logutBtn = () => {
    signout();
  };

  const toggleDisplayGraph = () => {
    setShowGraph(!showGraph);
  }

  return (
    <Wrapper>
      <BorderUnderline></BorderUnderline>
      <MainArea>
        <FeatureWrapper>
          <FeatureArea onClick={toggleDisplayGraph}>
            <FeatureImage src={IconBarChart} />
            <FeatureDescription>Generate graph</FeatureDescription>
          </FeatureArea>
          <FeatureArea>
            <FeatureImage src={IconApi} />
            <FeatureDescription>Get data</FeatureDescription>
          </FeatureArea>
          <FeatureArea onClick={logutBtn}>
            <FeatureImage src={IconLogout} />
            <FeatureDescription>Sign out</FeatureDescription>
          </FeatureArea>
        </FeatureWrapper>
        <FeatureContainer>
        { showGraph ? <MCView></MCView> : null }
        </FeatureContainer>
      </MainArea>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signout())
  };
};

export default connect(null, mapDispatchToProps)(EmployeeAccount);
