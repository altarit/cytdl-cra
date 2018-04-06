import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './Screens.css'
import InputScreen from '../../screenComponents/InputScreen/InputScreen'
import PreviewScreen from '../../screenComponents/PreviewScreen/PreviewScreen'
import ProcessingScreen from '../../screenComponents/ProcessingScreen/ProcessingScreen'
import ResultScreen from '../../screenComponents/ResultScreen/ResultScreen'

class Screens extends Component {
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

  getActiveScreen = (phase) => {
    return React.createElement(phase.type, null)
  }

  render() {
    let phase = this.props.phase
    return (
      <div className={'Screens' + (this.props.toLeft ? ' left' : ' right')}>
        <ReactCSSTransitionGroup
          transitionName='carousel'
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}>
          <div key={phase.id} className='Screens_box'>
            {this.getActiveScreen(phase)}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Screens
