import {connect} from 'react-redux'

import PreviewScreen from '../component/PreviewScreen'
import {
  mapLinksToPreviews,
  togglePreview,
  sendPreviewRequest,
  startProcessing,
  startProcessingAll,
  selectFormat,
  openFormatsPopup,
  downloadZipAll,
} from '../module/previewScreenActions'

const mapDispatchToProps = {
  mapLinksToPreviews,
  togglePreview,
  sendPreviewRequest,
  startProcessing,
  startProcessingAll,
  selectFormat,
  openFormatsPopup,
  downloadZipAll,
}

const mapStateToProps = (state) => ({
  isCompleted: state.previewScreen.isCompleted,
  links: state.inputScreen.links,
  previews: state.previewScreen.previews,
  header: state.previewScreen.header,
})

export default connect(mapStateToProps, mapDispatchToProps)(PreviewScreen)
