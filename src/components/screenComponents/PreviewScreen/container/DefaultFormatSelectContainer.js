import {connect} from 'react-redux'

import DefaultFormatSelect from '../component/DefaultFormatSelect'
import {
  bulkSelectFormat,
  openBulkFormatsPopup,
} from '../module/previewScreen'

const mapDispatchToProps = {
  onChange: bulkSelectFormat,
  onPopupToggle: openBulkFormatsPopup,
}

const mapStateToProps = (state) => ({
  selected: state.previewScreen.selectedFormat,
  formats: state.previewScreen.bulkFormats,
  isPopupOpen: state.previewScreen.isBulkFormatsPopupOpen,
})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultFormatSelect)
