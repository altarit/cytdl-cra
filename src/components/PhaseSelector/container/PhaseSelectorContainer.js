import {connect} from 'react-redux'

import PhaseSelectorContainer from '../component/PhaseSelector'
import {changePhase} from '../module/phaseSelector'

const mapDispatchToProps = {
  changePhase
}

const mapStateToProps = (state) => ({
  currentPhaseId: state.phaseSelector.currentPhaseId,
  previousPhaseId: state.phaseSelector.previousPhaseId,
  frozen: state.phaseSelector.frozen
})

export default connect(mapStateToProps, mapDispatchToProps)(PhaseSelectorContainer)
