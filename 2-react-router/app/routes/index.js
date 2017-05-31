import React from 'react'
import {Route, Redirect, IndexRoute} from 'react-router'

import auth from '../auth'

import App from './App'
import Login from './Login'
import Logout from './Logout'
import Dashboard from './Dashboard'

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}



const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    <Redirect from="dashboard/1" to="dashboard" />
  </Route>
)

export default routes
