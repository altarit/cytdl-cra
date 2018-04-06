import { combineReducers } from 'redux'
import phaseSelectorReducer from '../components/PhaseSelector/phaseSelectorModule'

export default combineReducers({
  phaseSelector: phaseSelectorReducer
})
