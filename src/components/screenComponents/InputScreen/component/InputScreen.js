import React, {Component} from 'react'

import './InputScreen.css'

class InputScreen extends Component {
  render() {
    return (
      <div className='InputScreen Screen'>
        <div className='InputScreen_header'>
          <h2>InputScreen</h2>
        </div>
        <div className='InputScreen_form'>
          <div contentEditable='true' className='InputScreen_textarea'/>
        </div>
        <div className='InputScreen_footer'>
          Place link above
        </div>
      </div>
    )
  }
}

export default InputScreen
