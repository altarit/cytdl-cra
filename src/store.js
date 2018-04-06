import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import openSocket from 'socket.io-client'

import rootReducer from './reducer'
import socketMiddleware from './middlewares/websocketMiddleware'

const socket = openSocket('http://localhost:4000')

const initialState = {}
const enhancers = []
const middleware = [thunk, socketMiddleware(socket)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

let store = createStore(rootReducer, initialState, composedEnhancers)

socket.on('action', store.dispatch);

[
  'connect',
  'connect_error',
  'connect_timeout',
  'error',
  'disconnect',
  'reconnect',
  'reconnect_attempt',
  'reconnecting',
  'reconnect_error',
  'reconnect_failed'
].forEach(ev =>
    socket.on(ev, () => {
      console.log(`connectionState ${ev}...`)
      store.dispatch({
        type: 'WEBSOCKET_UPDATE_STATUS',
        status: ev
      })
    })
)

export default store
