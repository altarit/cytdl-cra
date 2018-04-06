import React, {Component} from 'react'
import PropTypes from 'prop-types'

import logo from './logo.svg'
import './Header.css'

class Header extends Component {
  static propTypes = {
    connectionStatus: PropTypes.string.isRequired
  }

  render() {
    return (
      <header className='Header'>
        <img src={logo} className='Header_logo' alt='logo'/>
        <h1 className='Header_title'>Welcome to React! {this.props.connectionStatus}</h1>
      </header>
    )
  }
}

export default Header
