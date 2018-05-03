import React, {Component} from 'react'
import PropTypes from 'prop-types'

import OnOffSwitch from '../../ui/OnOffSwitch'
import './PreviewEntry.css'

class PreviewEntry extends Component {
  static propTypes = {
    entry: PropTypes.object.isRequired,

    togglePreview: PropTypes.func.isRequired,
    startProcessing: PropTypes.func.isRequired,
  }

  togglePreview = (newValue) => {
    this.props.togglePreview(this.props.entry.id, newValue)
  }

  startProcessing = () => {
    this.props.startProcessing(this.props.entry)
  }

  render() {
    let entry = this.props.entry
    return (
      <div className='PreviewEntry'>
        <div className='PreviewEntry_tumbler'>
          <OnOffSwitch onChange={this.togglePreview} checked={entry.enabled}/>
        </div>
        <div className='PreviewEntry_thumbnail'>
          <a href={entry.url} target='_blank'>
            {entry.thumbnail ? (
              <img src={entry.thumbnail} width='100%'/>
            ) : <p>'None'</p>}
          </a>
        </div>
        <div className='PreviewEntry_info'>
          <div className='PreviewEntry_link'><a href={entry.url} target='_blank'>{entry.url}</a></div>
          <div className='PreviewEntry_title'>{entry.title}</div>
          <div className='PreviewEntry_progressbar'>Status: {entry.statusText || entry.status.name}</div>
        </div>
        <div className='PreviewEntry_status'>
          {entry.status.id === 3 ? (
            <button onClick={this.startProcessing}>S</button>
          ) : null}
          {entry.href ? (
            <a href={entry.href} download>D</a>
          ) : null}
        </div>
      </div>
    )
  }
}

export default PreviewEntry
