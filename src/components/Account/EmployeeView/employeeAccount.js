import React from "react";
import IconBarChart from "../../../assets/account/barchart.svg";
import IconApi from "../../../assets/account/api.svg";
import IconLogout from "../../../assets/account/logout.svg";
import { connect } from "react-redux";
import { signout } from "../../../__redux/actions/authActions";
import {
  Wrapper,
  FeatureWrapper,
  MainArea,
  FeatureContainer,
  FeatureImage,
  FeatureArea,
  FeatureDescription,
  BorderUnderline
} from "./styledEmployeeAccount";

const EmployeeAccount = ({ signout }) => {

  const logutBtn = () => {
    signout();
  };

  return (
    <Wrapper>
      <BorderUnderline></BorderUnderline>
      <MainArea>
        <FeatureWrapper>
          <FeatureArea>
            <FeatureImage src={IconBarChart} />
            <FeatureDescription>Generate graph</FeatureDescription>
          </FeatureArea>
<<<<<<< HEAD

          <FeatureArea onClick={() => showGraphBtn()}>
=======
          <FeatureArea>
>>>>>>> master
            <FeatureImage src={IconApi} />
            <FeatureDescription>Get data</FeatureDescription>
          </FeatureArea>
          <FeatureArea onClick={logutBtn}>
            <FeatureImage src={IconLogout} />
            <FeatureDescription>Sign out</FeatureDescription>
          </FeatureArea>
        </FeatureWrapper>
        <FeatureContainer></FeatureContainer>
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
