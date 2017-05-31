import React, {PropTypes, Component} from 'react'

class App extends Component {
  render() {
    const {children} = this.props
    return (
      <div>Test</div>
    )
  }
}

App.prefetchData = ({location, params}) => (dispatch) => {
  const action = (id) => dispatch => {
    return fetch(`/api/products/${id}`)
      .then(raw => raw.json())
      .then(payload => dispatch({type: 'SOME_TYPE', payload}))
  }

  // your action need to be a Promise
  // you have to use some promise middleware or redux-thunk
  // and also you need to return from action promise like i did above

  return Promise.all([dispatch(action(params.id))])
}

App.propTypes = {
  children: PropTypes.element
}

export default App
