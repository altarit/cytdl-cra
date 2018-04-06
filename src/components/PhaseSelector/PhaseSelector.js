import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './PhaseSelector.css'
import Screens from "../Screens/Screens"

class PhaseSelector extends Component {
  static propTypes = {
    currentPhaseId: PropTypes.number.isRequired,

    changePhase: PropTypes.func.isRequired
  }

  handleLeft = () => {
    let phaseId = this.props.currentPhaseId
    if (phaseId === 0) {
      return
    }

    this.props.changePhase(phaseId - 1)
  }

  handleRight = () => {
    let phaseId = this.props.currentPhaseId
    if (phaseId + 1 === Screens.PHASES.length) {
      return
    }

    this.props.changePhase(phaseId + 1)
  }

  render() {
    return (
      <div className='PhaseSelector'>
        <button onClick={this.handleLeft}>Left</button>
        <button onClick={this.handleRight}>Right</button>
      </div>
    )
  }
}

export default PhaseSelector
