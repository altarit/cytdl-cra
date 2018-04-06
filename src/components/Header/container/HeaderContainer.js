import {connect} from 'react-redux'

import Header from '../component/Header'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  connectionStatus: state.websocket.status,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
