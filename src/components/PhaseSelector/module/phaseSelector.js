const PHASE_SELECTOR_SELECT_PHASE = 'PHASE_SELECTOR_SELECT_PHASE'

export function changePhase(phaseId) {
  return {
    type: PHASE_SELECTOR_SELECT_PHASE,
    phaseId: phaseId
  }
}

const initialState = {
  currentPhaseId: 0,
  previousPhaseId: 0
}

export default (state = initialState, action) => {
  console.log(`reduce phaseSelector ${action.type}`)
  switch (action.type) {
    case PHASE_SELECTOR_SELECT_PHASE:
      return {...state, currentPhaseId: action.phaseId, previousPhaseId: state.currentPhaseId}
    default:
      return state
  }
}
