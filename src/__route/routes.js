import React from 'react';
import PrivateRoute from './private';
import Account from  '../components/Account/account'
import Login from  '../components/Login/login'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import AddClient from '../components/AddClient/addClient'

const Routes = ({auth}) => {
  return (
    <Switch>
      <PrivateRoute exact path="/account" component={Account} authenticated={auth.uid} />
      <Route exact path="/solutions" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" />
      <Route exact path="/client" component={AddClient} />
      <Redirect to="/login"></Redirect>
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Routes)
