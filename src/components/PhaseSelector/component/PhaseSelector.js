import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './PhaseSelector.css'
import Screens from '../../Screens'

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

  selectPhaseInput = () => this.props.changePhase(0)
  selectPhaseReview = () => this.props.changePhase(1)
  selectPhaseProcessing = () => this.props.changePhase(2)
  selectPhaseResult = () => this.props.changePhase(3)

  render() {
    return (
      <div className='PhaseSelector'>
        <ul className='PhaseSelector_phases-list'>
          <li onClick={this.selectPhaseInput}>I</li>
          <li onClick={this.selectPhaseReview}>II</li>
          <li onClick={this.selectPhaseProcessing}>III</li>
          <li onClick={this.selectPhaseResult}>IV</li>
        </ul>
        <div className='PhaseSelector_control'>
          <button onClick={this.handleLeft}>Left</button>
          <button onClick={this.handleRight}>Right</button>
        </div>
      </div>
    )
  }
}

export default PhaseSelector
