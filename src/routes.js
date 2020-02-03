import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Account from './Account/account'

class Routes extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/" />
          <Route path="/account" component={Account} />
          <Route path="/solutions" />
          <Route path="/about" />
        </Switch>
      </div>
    );
  }
}

export default Routes;