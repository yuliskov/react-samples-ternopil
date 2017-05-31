import React, {Component} from 'react'
import {Link} from 'react-router'

import auth from '../auth'

class App extends Component {

  render() {
    console.log(this.props)
    const {children} = this.props

    return (
      <div>
      <header>
        {auth.loggedIn()
          ? <Link to="/logout" state={{state: 'asdasd'}}>Logout</Link>
          : <Link to="/login">Login</Link>
        }
      </header>

        {children || <div>Root page</div>}

      </div>
    )
  }
}

export default App
