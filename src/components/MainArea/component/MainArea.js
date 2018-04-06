import React, {Component} from 'react'

import './MainArea.css'
import Screens from '../../Screens'
import PhaseSelector from '../../PhaseSelector'

class MainArea extends Component {
  render() {
    return (
      <div className='MainArea'>
        <Screens/>
        <PhaseSelector/>
      </div>
    )
  }
}

export default MainArea
