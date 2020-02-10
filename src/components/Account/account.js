import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getInfo } from '../../__redux/actions/userInfoActions';
import AdminAccount from './AdminView/adminAccount';
import EmployeeAccount from '../Account/EmployeeView/employeeAccount';


const Account = ({ userinfo, info }) => {
  useEffect(() => {
    info();
    console.log('hi')
  }, [info])

  return (userinfo.role === 'Admin' ? <AdminAccount/> : <EmployeeAccount/>)
}

const mapStateToProps = (state) => {
  return {
    userinfo: state.userinfo.info
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    info: () => dispatch(getInfo())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Account);
