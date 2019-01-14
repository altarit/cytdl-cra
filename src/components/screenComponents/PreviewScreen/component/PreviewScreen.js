import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PreviewScreen.css'
import PreviewEntry from '../../../PreviewEntry'
import DefaultFormatSelect from '../container/DefaultFormatSelectContainer'

class PreviewScreen extends Component {
  static propTypes = {
    isCompleted: PropTypes.bool.isRequired,
    links: PropTypes.array.isRequired,
    previews: PropTypes.array.isRequired,
    header: PropTypes.object,

    mapLinksToPreviews: PropTypes.func.isRequired,
    togglePreview: PropTypes.func.isRequired,
    sendPreviewRequest: PropTypes.func.isRequired,
    startProcessing: PropTypes.func.isRequired,
    selectFormat: PropTypes.func.isRequired,
    openFormatsPopup: PropTypes.func.isRequired,
  }

  componentDidMount () {
    console.log('PreviewScreen.componentDidMount')
    this.props.mapLinksToPreviews(this.props.links)
    this.props.sendPreviewRequest(this.props.links)
  }

  render () {
    const { header, previews } = this.props

    return (
      <div className='PreviewScreen Screen'>
        <div className='PreviewScreen_header'>
          <h2>PreviewScreen</h2>
          <div className='PreviewScreen_control'>
            <DefaultFormatSelect />
          </div>
        </div>
        <div className='PreviewScreen_entries'>
          <div className='PreviewScreen_controls'>
            <a className='btn btn-small' onClick={this.props.startProcessingAll}>
              Process All
            </a>
            {header && header.href ? (
              <a className='btn btn-small' target='_blank' href={'http://localhost:3002/' + header.href} download>
                Zip
              </a>
            ) : (
              <a className='btn btn-small' onClick={this.props.downloadZipAll}>
                Download All in Zip
              </a>
            )}
          </div>

          {previews.map(el =>
            <PreviewEntry key={el.id} entry={el}
                          togglePreview={this.props.togglePreview}
                          startProcessing={this.props.startProcessing}
                          selectFormat={this.props.selectFormat}
                          openFormatsPopup={this.props.openFormatsPopup} />
          )}
        </div>
      </div>
    )
  }
}

export default PreviewScreen
