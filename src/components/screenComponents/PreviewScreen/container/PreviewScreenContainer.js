import {connect} from 'react-redux'

import PreviewScreen from '../component/PreviewScreen'
import {mapLinksToPreviews, togglePreview, sendPreviewRequest, startProcessing} from '../module/previewScreen'

const mapDispatchToProps = {
  mapLinksToPreviews,
  togglePreview,
  sendPreviewRequest,
  startProcessing,
}

const mapStateToProps = (state) => ({
  isCompleted: state.previewScreen.isCompleted,
  links: state.inputScreen.links,
  previews: state.previewScreen.previews,
})

export default connect(mapStateToProps, mapDispatchToProps)(PreviewScreen)
