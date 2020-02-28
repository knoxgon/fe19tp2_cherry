import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AdminAccount from './AdminView/adminAccount';
import EmployeeAccount from '../Account/EmployeeView/employeeAccount';
import { getInfo } from "../../__redux/actions/userInfoActions";
import Loader from "react-loader";

const Account = ({ userinfo, getinfo }) => {
  useEffect(() => {
      getinfo();
  }, [getinfo])
  return (userinfo.logo != null && userinfo.role === 'Admin' ? <AdminAccount/> : userinfo.logo != null && userinfo.role === 'Employee' ? <EmployeeAccount/> : <Loader loaded={userinfo.logo} lines={13} length={20} width={10} radius={30} corners={1} rotate={0} direction={1} color="#000" speed={1} trail={60} shadow={false} hwaccel={false} className="spinner" zIndex={2e9} top="50%" left="50%" scale={1.0} loadedClassName="loadedContent"/>)
}

const mapStateToProps = (state) => {
  return {
    userinfo: state.userinfo.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getinfo: () => dispatch(getInfo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
