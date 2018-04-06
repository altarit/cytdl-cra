import {connect} from 'react-redux'

import InputScreen from '../component/InputScreen'
import {rescanArea} from "../module/inputScreen"

const mapDispatchToProps = {
  rescanArea
}

const mapStateToProps = (state) => ({
  isCompleted: state.inputScreen.isCompleted,
  validCount: state.inputScreen.validCount,
  totalCount: state.inputScreen.totalCount,
  links: state.inputScreen.links,
  safeText: state.inputScreen.safeText,
})

export default connect(mapStateToProps, mapDispatchToProps)(InputScreen)
