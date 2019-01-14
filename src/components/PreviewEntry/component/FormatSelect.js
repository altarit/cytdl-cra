import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './FormatSelect.css'

class FormatSelect extends Component {
  static propTypes = {
    formats: PropTypes.array.isRequired,
    selected: PropTypes.object,
    isPopupOpen: PropTypes.bool,
    editable: PropTypes.bool.isRequired,

    onChange: PropTypes.func.isRequired,
    onPopupToggle: PropTypes.func.isRequired,
  }

  renderOption = (option) => {
    return <div key={option.format_id} onClick={this.props.onChange.bind(null, option)}>
      {option.ext + ' - ' + option.format}
    </div>
  }

  render () {
    let formats = this.props.formats
    return (
      <div className='FormatSelect'>
        <div className='FormatSelect_selected' onClick={this.props.onPopupToggle}>
          {this.props.selected
            ? this.props.selected.ext + ' - ' + this.props.selected.format
            : 'Select format...'}
        </div>
        <div className='FormatSelect_options-popup'>
          {this.props.isPopupOpen && this.props.editable ? (
            <div className='FormatSelect_options'>
              {this.renderOption({ ext: 'mp3', format: 'Best quality mp3', format_id: 'bq_mp3', special: true })}
              {formats.map(this.renderOption)}
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default FormatSelect
