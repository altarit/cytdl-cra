import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import store from '../../../store'
import {Provider} from 'react-redux'

describe('Test test', () => {
  it('first', () => {
    expect(1).toEqual(1)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
