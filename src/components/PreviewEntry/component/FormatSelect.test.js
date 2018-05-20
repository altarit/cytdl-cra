import React from 'react'
import ReactDOM from 'react-dom'
import FormatSelect from './FormatSelect'

import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'

describe('Test test 2', () => {
  it('renders without crashing', () => {
    const formats = []
    const mockRemoveGreeting = jest.fn()
    const component = shallow(
      <FormatSelect formats={formats} selected={undefined} isPopupOpen={true}
                    onChange={mockRemoveGreeting} onPopupToggle={mockRemoveGreeting}/>
    )
  })
})
