import { combineReducers } from 'redux'
import websocket from './modules/websocket'
import phaseSelector from './components/PhaseSelector/module/phaseSelector'
import inputScreen from './components/screenComponents/InputScreen/module/inputScreen'
import previewScreen from './components/screenComponents/PreviewScreen/module/previewScreenReducer'
import processingScreen from './components/screenComponents/ProcessingScreen/module/processingScreen'
import resultScreen from './components/screenComponents/ResultScreen/module/inputScreen'

export default combineReducers({
  websocket,
  phaseSelector,
  inputScreen,
  previewScreen,
  processingScreen,
  resultScreen,
})
