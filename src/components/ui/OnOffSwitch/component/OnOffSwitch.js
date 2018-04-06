import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './OnOffSwitch.css'

class OnOffSwitch extends Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,

    onChange: PropTypes.func.isRequired,
  }

  toggle = () => {
    this.props.onChange(!this.props.checked)
  }

  render() {
    return (
      <div className={'OnOffSwitch' + (this.props.checked ? ' OnOffSwitch__checked' : '')} onClick={this.toggle}>
        <label className='OnOffSwitch_outter'/>
        <label className='OnOffSwitch_inner'/>
      </div>
    )
  }
}

export default OnOffSwitch
