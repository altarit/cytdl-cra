import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './Screens.css'
import InputScreen from '../../screenComponents/InputScreen'
import PreviewScreen from '../../screenComponents/PreviewScreen'
import ProcessingScreen from '../../screenComponents/ProcessingScreen'
import ResultScreen from '../../screenComponents/ResultScreen'

class Screens extends Component {
  static propTypes = {
    currentPhaseId: PropTypes.number.isRequired,
    previousPhaseId: PropTypes.number.isRequired,
  }

  static PHASES = [{
    name: 'INPUT',
    id: 0,
    type: InputScreen
  }, {
    name: 'PREVIEW',
    id: 1,
    type: PreviewScreen
  }, {
    name: 'PROCESSING',
    id: 2,
    type: ProcessingScreen
  }, {
    name: 'RESULT',
    id: 3,
    type: ResultScreen
  }]

  getActiveScreen = (phaseId) => {
    return React.createElement(Screens.PHASES[phaseId].type, null)
  }

  render() {
    let currentPhaseId = this.props.currentPhaseId
    let toLeft = this.props.currentPhaseId < this.props.previousPhaseId

    return (
      <div className={'Screens' + (toLeft ? ' left' : ' right')}>
        <ReactCSSTransitionGroup
          transitionName='carousel'
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}>
          <div key={currentPhaseId} className='Screens_box'>
            {this.getActiveScreen(currentPhaseId)}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Screens
