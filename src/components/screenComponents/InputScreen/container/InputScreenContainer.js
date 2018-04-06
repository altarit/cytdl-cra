import {connect} from 'react-redux'

import InputScreen from '../component/InputScreen'
import {rescanArea, toggleHelp} from "../module/inputScreen"

const mapDispatchToProps = {
  rescanArea,
  toggleHelp
}

const mapStateToProps = (state) => ({
  isCompleted: state.inputScreen.isCompleted,
  validCount: state.inputScreen.validCount,
  totalCount: state.inputScreen.totalCount,
  links: state.inputScreen.links,
  safeText: state.inputScreen.safeText,
  exampleLink: state.inputScreen.exampleLink,
  isHelpOpen: state.inputScreen.isHelpOpen,
})

export default connect(mapStateToProps, mapDispatchToProps)(InputScreen)
