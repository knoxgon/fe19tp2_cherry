import React from 'react';
import PrivateRoute from './private';
import Account from  '../Account/account'
import Login from  '../Login/login'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" />
        <PrivateRoute exact path="/account" component={Account} authenticated={this.props.auth.uid} />
        <Route exact path="/solutions" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Routes)
