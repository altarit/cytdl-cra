import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './FormatSelect.css'

class FormatSelect extends Component {
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
      <div className='FormatSelect'>
        <div className='FormatSelect_selected' onClick={this.props.onPopupToggle}>
          {this.props.selected
            ? this.props.selected.ext + ' - ' + this.props.selected.format
            : 'Select format...'}
        </div>
        <div className="FormatSelect_options-popup">
          {this.props.isPopupOpen ? (
            <div className='FormatSelect_options'>
              {formats.map(f =>
                <div key={f.format_id} onClick={this.props.onChange.bind(null, f)}>
                  {f.ext + ' - ' + f.format}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default FormatSelect
