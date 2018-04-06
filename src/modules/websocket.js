const WEBSOCKET_UPDATE_STATUS = 'WEBSOCKET_UPDATE_STATUS'

const initialState = {
  status: 'initialized'
}

const handlers = {
  [WEBSOCKET_UPDATE_STATUS]: (state, action) => {
    return {
      ...state,
      status: action.status,
    }
  }
}

export default (state = initialState, action) => {
  let handler = handlers[action.type]
  if (!handler) {
    return state
  }
  return handler(state, action)
}
