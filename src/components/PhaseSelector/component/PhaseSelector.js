import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './PhaseSelector.css'
import Screens from '../../Screens'

class PhaseSelector extends Component {
  static propTypes = {
    currentPhaseId: PropTypes.number.isRequired,
    previousPhaseId: PropTypes.number.isRequired,
    frozen: PropTypes.bool.isRequired,
    screensCompletion: PropTypes.array.isRequired,

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
    let frozen = this.props.frozen
    let currentId = this.props.currentPhaseId
    let completedScreens = this.props.screensCompletion

    let isCurrentCompleted = completedScreens[currentId]
    let completedInput = completedScreens[0]
    let completedPreview = completedInput && completedScreens[1]
    let completedProcessing = completedPreview && completedScreens[2]

    return (
      <div className='PhaseSelector'>
        <ul className='PhaseSelector_phases-list'>
          <button onClick={this.selectPhaseInput}>I</button>
          <button disabled={currentId < 1 && !completedInput} onClick={this.selectPhaseReview}>II</button>
          <button disabled={currentId < 2 && !completedPreview} onClick={this.selectPhaseProcessing}>III</button>
          <button disabled={currentId < 3 && !completedProcessing} onClick={this.selectPhaseResult}>IV</button>
        </ul>
        <div className='PhaseSelector_control'>
          <button onClick={this.handleLeft} disabled={frozen || currentId === 0}>Back</button>
          <button onClick={this.handleRight} disabled={frozen || currentId === 3 || !isCurrentCompleted}>Next</button>
        </div>
      </div>
    )
  }
}

export default PhaseSelector
