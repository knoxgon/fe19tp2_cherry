import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AdminAccount from './AdminView/adminAccount';
import EmployeeAccount from '../Account/EmployeeView/employeeAccount';


const Account = ({ userinfo }) => {
  const [role, setRole] = useState('');

  useEffect(() => {
    setRole(userinfo.role);
  }, [userinfo, userinfo.role])

  return (userinfo && role === 'Admin' ? <AdminAccount/> : <EmployeeAccount/>)
}

const mapStateToProps = (state) => {
  return {
    userinfo: state.userinfo.info
  }
}

export default connect(mapStateToProps)(Account);
