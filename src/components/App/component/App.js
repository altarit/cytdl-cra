import React, {Component} from 'react'

import './App.css'
import Header from '../../Header'
import MainArea from '../../MainArea'
import Footer from '../../Footer'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header/>
        <MainArea/>
        <Footer/>
      </div>
    )
  }
}

export default App
