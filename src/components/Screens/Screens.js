import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './Screen.css'

class Screens extends Component {
  static PHASES = [{
    name: 'INPUT',
    id: 0
  }, {
    name: 'PREVIEW',
    id: 1
  }, {
    name: 'PROCESSING',
    id: 2
  }, {
    name: 'RESULT',
    id: 3
  }]

  render() {
    let phase = this.props.phase
    return (
      <div className={'Screens' + (this.props.toLeft ? ' left' : ' right')}>
        <ReactCSSTransitionGroup
          transitionName='carousel'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <div key={phase.id} className='Screens_box'>
            <div>
              {phase.name}
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Screens
