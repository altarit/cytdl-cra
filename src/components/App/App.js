import React, {Component} from 'react'

import './App.css'
import Header from '../Header/Header'
import MainArea from '../MainArea/MainArea'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header/>
        <MainArea/>
      </div>
    )
  }
}

export default App
