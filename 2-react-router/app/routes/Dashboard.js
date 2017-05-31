import React, {Component} from 'react'
import auth from '../auth'

class Dashboard extends Component {
  render() {
    return (
      <div>Token is: {auth.getToken()}</div>
    )
  }
}

export default Dashboard
