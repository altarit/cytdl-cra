import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
        <div className='PreviewEntry_current'>
          <div className='PreviewEntry_thumbnail'>
            <a href={entry.url} target='_blank'>
              {entry.thumbnail ? (
                <img src={entry.thumbnail} className='PreviewEntry_thumbnail-image'/>
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
                <a className='btn btn-small' href={'http://localhost:80/' + entry.href} target='_blank'
                   download>Download</a>
              ) : null}
              <button className='btn btn-small' onClick={this.remove}>Remove</button>
            </div>
          </div>
        </div>
        {entry.children ? entry.children.map(el =>
          <PreviewEntry key={el.id} entry={el}
                        togglePreview={()=>{}}
                        startProcessing={()=>{}}/>
        ) : null}
      </div>
    )
  }
}

export default PreviewEntry
