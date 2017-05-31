import React, {Component} from 'react'

import auth from '../auth'

class Login extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      email: '',
      pass: '',
      error: ''
    }
  }

  handleClick() {
    console.log(this.props)
    const {email, pass} = this.state
    auth.login({email, pass})
      .then(res => this.props.router.replace('dashboard'))
      .catch(error => this.setState({error}))
  }

  handleChange(type) {
    return (evt) => this.setState({[type]: evt.target.value})
  }

  render() {
    const {email, pass, error} = this.state
    return (
      <div>
        <input placeholder="login" type="email" value={email} onChange={this.handleChange('email')} />
        <input placeholder="password" type="password" value={pass} onChange={this.handleChange('pass')} />
        <button onClick={this.handleClick}>Login</button>
        {error && <div>{error}</div>}
      </div>
    )
  }
}

export default Login
