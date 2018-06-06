import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ExampleLink extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,

    onClick: PropTypes.func.isRequired,
  }

  useExample = () => {
    this.props.onClick(this.props.link)
  }

  render() {
    return (
      <span className='InputScreen_example' onClick={this.useExample}>
        <b>{this.props.link}</b>
        <br/>
      </span>
    )
  }
}

export default ExampleLink
