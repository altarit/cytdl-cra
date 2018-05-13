import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './DefaultFormatSelect.css'

class DefaultFormatSelect extends Component {
  static propTypes = {
    formats: PropTypes.array.isRequired,
    selected: PropTypes.object,
    isPopupOpen: PropTypes.bool,

    onChange: PropTypes.func.isRequired,
    onPopupToggle: PropTypes.func.isRequired,
  }

  render() {
    let formats = this.props.formats
    return (
      <div className='DefaultFormatSelect'>
        <div className='DefaultFormatSelect_selected' onClick={this.props.onPopupToggle}>
          {this.props.selected
            ? this.props.selected.format
            : 'Select format...'}
        </div>
        <div className='DefaultFormatSelect_options-popup'>
          {this.props.isPopupOpen ? (
            <div className='DefaultFormatSelect_options'>
              {formats.map(f =>
                <div key={f.format_id} onClick={this.props.onChange.bind(null, f)}>
                  {f.format}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default DefaultFormatSelect
