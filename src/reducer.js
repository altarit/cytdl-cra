import { combineReducers } from 'redux'
import phaseSelectorReducer from './components/PhaseSelector/module/phaseSelector'

export default combineReducers({
  phaseSelector: phaseSelectorReducer
})
