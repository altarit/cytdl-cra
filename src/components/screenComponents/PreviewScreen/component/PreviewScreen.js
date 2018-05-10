import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './PreviewScreen.css'
import PreviewEntry from '../../../PreviewEntry'

class PreviewScreen extends Component {
  static propTypes = {
    isCompleted: PropTypes.bool.isRequired,
    links: PropTypes.array.isRequired,
    previews: PropTypes.array.isRequired,

    mapLinksToPreviews: PropTypes.func.isRequired,
    togglePreview: PropTypes.func.isRequired,
    sendPreviewRequest: PropTypes.func.isRequired,
    startProcessing: PropTypes.func.isRequired,
    selectFormat: PropTypes.func.isRequired,
    openFormatsPopup: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log('PreviewScreen.componentDidMount')
    this.props.mapLinksToPreviews(this.props.links)
    this.props.sendPreviewRequest(this.props.links)
  }

  render() {
    return (
      <div className='PreviewScreen Screen'>
        <div className='PreviewScreen_header'>
          <h2>PreviewScreen</h2>
        </div>
        <div className='PreviewScreen_entries'>
          {this.props.previews.map(el =>
            <PreviewEntry key={el.id} entry={el}
                          togglePreview={this.props.togglePreview}
                          startProcessing={this.props.startProcessing}
                          selectFormat={this.props.selectFormat}
                          openFormatsPopup={this.props.openFormatsPopup}/>
          )}
        </div>
      </div>
    )
  }
}

export default PreviewScreen
