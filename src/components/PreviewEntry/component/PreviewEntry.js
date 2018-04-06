import React, {Component} from 'react'
import PropTypes from 'prop-types'

import OnOffSwitch from '../../ui/OnOffSwitch'
import './PreviewEntry.css'

class PreviewEntry extends Component {
  static propTypes = {
    entry: PropTypes.object.isRequired,

    togglePreview: PropTypes.func.isRequired,
  }

  togglePreview = (newValue) => {
    this.props.togglePreview(this.props.entry.id, newValue)
  }

  render() {
    let entry = this.props.entry
    return (
      <div className='PreviewEntry'>
        <div className='PreviewEntry_tumbler'>
          <OnOffSwitch onChange={this.togglePreview} checked={entry.enabled}/>
        </div>
        <div className='PreviewEntry_thumbnail'>
        </div>
        <div className='PreviewEntry_info'>
          {entry.url}
        </div>
        <div className='PreviewEntry_status'>
          {entry.status}
        </div>
      </div>
    )
  }
}

export default PreviewEntry