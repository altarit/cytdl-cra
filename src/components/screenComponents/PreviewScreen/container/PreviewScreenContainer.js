import {connect} from 'react-redux'

import PreviewScreen from '../component/PreviewScreen'
import {mapLinksToPreviews} from '../module/previewScreen'

const mapDispatchToProps = {
  mapLinksToPreviews
}

const mapStateToProps = (state) => ({
  isCompleted: state.previewScreen.isCompleted,
  links: state.inputScreen.links,
  previews: state.previewScreen.previews,
})

export default connect(mapStateToProps, mapDispatchToProps)(PreviewScreen)
