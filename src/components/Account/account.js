import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AdminAccount from './AdminView/adminAccount';
import EmployeeAccount from '../Account/EmployeeView/employeeAccount';
import { getInfo } from "../../__redux/actions/userInfoActions";
import { Load } from '../../__misc/js/ls';

const Account = ({ userinfo, getinfo }) => {
  useEffect(() => {
      getinfo();
  }, [getinfo])
  return (userinfo.logo != null && userinfo.role === 'Admin' ? <AdminAccount/> : userinfo.logo != null && userinfo.role === 'Employee' ? <EmployeeAccount/> : <Load complogo={userinfo.logo}></Load>)
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
