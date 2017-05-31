import React, {Component} from 'react'
import auth from '../auth'

class Logout extends Component {
  componentDidMount() {
    auth.logout()
      .then(_ => this.props.router.replace('/'))
  }
  render() {
    return (
      <div>
        Logging out...
      </div>
    )
  }
}

export default Logout
