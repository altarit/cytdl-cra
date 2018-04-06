import React, {Component} from 'react'

import './App.css'
import Header from '../Header/Header'
import MainArea from '../MainArea/MainArea'
import Footer from '../Footer/Footer'

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
