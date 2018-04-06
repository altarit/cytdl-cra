import React, {Component} from 'react'

import './MainArea.css'
import ScreenContainer from '../ScreenContainer/ScreenContainer'
import PhaseSelector from '../PhaseSelector/PhaseSelector'

class MainArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPhaseId: 0,
      previousPhaseId: 0
    }
  }

  changePhase = (phaseId) => {
    this.setState({currentPhaseId: phaseId, previousPhaseId: this.state.currentPhaseId})
  }

  render() {
    const toLeft = this.state.currentPhaseId < this.state.previousPhaseId
    const phase = ScreenContainer.PHASES[this.state.currentPhaseId]

    return (
      <div className='MainArea'>
        <ScreenContainer toLeft={toLeft} phase={phase}/>
        <PhaseSelector changePhase={this.changePhase} currentPhaseId={this.state.currentPhaseId}/>
      </div>
    )
  }
}

export default MainArea
