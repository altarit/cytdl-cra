const PHASE_SELECTOR_SELECT_PHASE = 'PHASE_SELECTOR_SELECT_PHASE'
const PHASE_SELECTOR_SELECT_PHASE_UNFREEZE = 'PHASE_SELECTOR_SELECT_PHASE_UNFREEZE'

export function changePhase(phaseId) {
  return (dispatch) => {
    dispatch({
      type: PHASE_SELECTOR_SELECT_PHASE,
      phaseId: phaseId
    })

    setTimeout(() => {
      dispatch({
        type: PHASE_SELECTOR_SELECT_PHASE_UNFREEZE,
      })
    }, 600)
  }
}

const initialState = {
  currentPhaseId: 0,
  previousPhaseId: 0,
  frozen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PHASE_SELECTOR_SELECT_PHASE:
      return {...state, currentPhaseId: action.phaseId, previousPhaseId: state.currentPhaseId, frozen: true}
    case PHASE_SELECTOR_SELECT_PHASE_UNFREEZE:
      return {...state, frozen: false}
    default:
      return state
  }
}
