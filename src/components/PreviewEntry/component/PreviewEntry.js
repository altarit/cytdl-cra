import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './PreviewEntry.css'

class PreviewEntry extends Component {
  static propTypes = {
    entry: PropTypes.object.isRequired,
  }

  render() {
    let entry = this.props.entry
    return (
      <div className='PreviewEntry'>
        <div className='PreviewEntry_tumbler'>
          {entry.n}
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
