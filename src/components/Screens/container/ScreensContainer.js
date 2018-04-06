import {connect} from 'react-redux'

import Screens from '../component/Screens'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  currentPhaseId: state.phaseSelector.currentPhaseId,
  previousPhaseId: state.phaseSelector.previousPhaseId
})

export default connect(mapStateToProps, mapDispatchToProps)(Screens)
