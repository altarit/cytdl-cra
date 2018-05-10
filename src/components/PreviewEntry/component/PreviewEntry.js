import React, {Component} from 'react'
import PropTypes from 'prop-types'

import FormatSelect from './FormatSelect'
import './PreviewEntry.css'

class PreviewEntry extends Component {
  static propTypes = {
    entry: PropTypes.object.isRequired,

    togglePreview: PropTypes.func.isRequired,
    startProcessing: PropTypes.func.isRequired,
    selectFormat: PropTypes.func.isRequired,
    openFormatsPopup: PropTypes.func.isRequired,
  }

  remove = (newValue) => {
    this.props.togglePreview(this.props.entry.id, false)
  }

  startProcessing = () => {
    this.props.startProcessing(this.props.entry)
  }

  changeFormat = (format) => {
    this.props.selectFormat(this.props.entry.id, this.props.entry.subId, format)
  }

  openFormatsPopup = () => {
    this.props.openFormatsPopup(this.props.entry.id, this.props.entry.subId)
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
              <div className='PreviewEntry_control-left'>
                {entry.status.id === 3 && entry.formats ? (
                  <FormatSelect formats={entry.formats} selected={entry.format}
                                isPopupOpen={entry.isFormatsPopupOpen}
                                onChange={this.changeFormat} onPopupToggle={this.openFormatsPopup}/>
                ) : null}
                <button onClick={this.startProcessing} disabled={!entry.format}>Download</button>
                {entry.href ? (
                  <a className='btn btn-small' href={'http://localhost:3002/' + entry.href} target='_blank'
                     download>Download</a>
                ) : null}
              </div>
              <div className='PreviewEntry_control-right'>
                <button className='btn btn-small' onClick={this.remove}>Remove</button>
              </div>
            </div>
          </div>
        </div>
        {entry.children ? entry.children.map(el =>
          <PreviewEntry key={el.id + '-' + el.subId} entry={el}
                        togglePreview={console.log}
                        startProcessing={this.props.startProcessing}
                        selectFormat={this.props.selectFormat}
                        openFormatsPopup={this.props.openFormatsPopup}/>
        ) : null}
      </div>
    )
  }
}

export default PreviewEntry
