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

  remove = (newValue) => {
    this.props.togglePreview(this.props.entry.id, false)
  }

  startProcessing = () => {
    this.props.startProcessing(this.props.entry)
  }

  render() {
    let entry = this.props.entry
    return (
      <div className={'PreviewEntry' + (entry.enabled ? '' : ' PreviewEntry__disabled')}>
        <div className='PreviewEntry_thumbnail'>
          <a href={entry.url} target='_blank'>
            {entry.thumbnail ? (
              <img src={entry.thumbnail} width='100%'/>
            ) : <p>'None'</p>}
          </a>
        </div>
        <div className='PreviewEntry_info'>
          {!entry.title ? (
            <div className='PreviewEntry_link'><a href={entry.url} target='_blank'>{entry.url}</a></div>
          ) : (
            <div className='PreviewEntry_title'>{entry.title}</div>
          )}
          <div className='PreviewEntry_progressbar'>{entry.statusText || entry.status.name}</div>
          <div className='PreviewEntry_control'>
            {entry.status.id === 3 ? (
              <button onClick={this.startProcessing}>S</button>
            ) : null}
            {entry.href ? (
              <a className='btn btn-small' href={entry.href} download>Download</a>
            ) : null}
            <button className='btn btn-small' onClick={this.remove}>Remove</button>
          </div>
        </div>
      </div>
    )
  }
}

export default PreviewEntry
