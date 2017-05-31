import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './modules'

let middlewares = applyMiddleware(thunkMiddleware)
if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger')
  middlewares = applyMiddleware(thunkMiddleware, createLogger())
}

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    middlewares
  )

  return store
}
