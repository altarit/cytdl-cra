import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './InputScreen.css'
import ExampleLink from './ExampleLink'

class InputScreen extends Component {
  static propTypes = {
    isCompleted: PropTypes.bool.isRequired,
    validCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    links: PropTypes.array.isRequired,
    safeText: PropTypes.string.isRequired,
    exampleLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
    isHelpOpen: PropTypes.bool.isRequired,

    rescanArea: PropTypes.func.isRequired,
    toggleHelp: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log('InputScreen.componentDidMount')
    this.refs.area.value = this.props.safeText
  }

  onAreaChange = () => {
    this.props.rescanArea(this.refs.area.value)
  }

  useExample = (link) => {
    this.refs.area.value += ' ' + link + '\n'
    this.onAreaChange()
  }

  render() {
    return (
      <div className='InputScreen Screen'>
        <div className='InputScreen_header'>
          <h2>Add video link</h2>
          <div className='InputScreen_description'>
            <div>
              e.g.<br/>
              {this.props.exampleLinks.map((link, i) =>
                <ExampleLink key={i} onClick={this.useExample} link={link}/>
              )}
            </div>
            <button className='btn' onClick={this.props.toggleHelp}>
              More options
            </button>
          </div>
          <div className={'InputScreen_help' + (this.props.isHelpOpen ? ' InputScreen_help__open' : '')}>
            You can download a few video if you paste several links into the area.<br/>
            <button className='btn' onClick={this.props.toggleHelp}>Got it</button>
          </div>
        </div>
        <div className='InputScreen_form'>
          <textarea className='InputScreen_textarea' ref='area' onInput={this.onAreaChange}/>
        </div>
        <div className='InputScreen_footer'>
          {!this.props.totalCount ? (
            <p>There's no links</p>
          ) : (this.props.validCount === this.props.totalCount) ? (
            <p>Found {this.props.totalCount} links.</p>
          ) : (
            <p>Found {this.props.validCount} links. Total {this.props.totalCount}.</p>
          )}
        </div>
      </div>
    )
  }
}

export default InputScreen
