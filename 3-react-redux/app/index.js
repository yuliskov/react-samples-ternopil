import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';

import {Provider, connect} from 'react-redux';
import {combineReducers, createStore, applyMiddleware, bindActionCreators, compose} from 'redux';

const actionCreator = () => (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: 'add'
      })
    }, 1000)
}

const reducer = (
  state = 0,
  action
) => {
  switch(action.type) {
  case 'add': return state + 1
  default: return state
  }
}

const rootReducer = combineReducers({
  counter: reducer
})

const finalStore = compose(applyMiddleware(ReduxThunk))(createStore)

const store = finalStore(
  rootReducer, {counter: 2}
)

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick={() => this.props.addValue()}>Add 1</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addValue() {
        dispatch(actionCreator())
      }
    }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

ReactDOM.render(
<Provider
  store={store}>
  <ConnectedApp />
</Provider>,
document.getElementById('root'))
