import React, {Component} from 'react'

import './MainArea.css'
import Screens from '../../Screens'
import PhaseSelector from '../../PhaseSelector'

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
    const phase = Screens.PHASES[this.state.currentPhaseId]

    return (
      <div className='MainArea'>
        <Screens toLeft={toLeft} phase={phase}/>
        <PhaseSelector changePhase={this.changePhase} currentPhaseId={this.state.currentPhaseId}/>
      </div>
    )
  }
}

export default MainArea
