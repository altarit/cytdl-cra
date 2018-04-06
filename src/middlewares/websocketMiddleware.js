const middleware = socket => store => next => action => {
  if (!action.ws) {
    return next(action)
  }
  socket.emit(action.ws, action)
  next(action)
}

export default middleware
