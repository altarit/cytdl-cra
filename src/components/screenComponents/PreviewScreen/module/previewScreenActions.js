import * as types from './previewScreenConstants'

export function mapLinksToPreviews (links) {
  let previews = links.map((el, i) => {
    return {
      id: i,
      url: el,
      title: '',
      enabled: true,
      status: { id: 0, name: 'Initialized.' },
    }
  })
  return {
    type: types.PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS,
    previews: previews,
  }
}

export function togglePreview (id, value) {
  return {
    type: types.PREVIEW_SCREEN_TOGGLE_PREVIEW,
    id,
    value,
  }
}

export function selectFormat (id, subId, format) {
  return {
    type: types.PREVIEW_SCREEN_SELECT_FORMAT,
    id,
    subId,
    format,
  }
}

export function bulkSelectFormat (format) {
  return {
    type: types.PREVIEW_SCREEN_BULK_SELECT_FORMAT,
    format,
  }
}

export function openFormatsPopup (id, subId) {
  return {
    type: types.PREVIEW_SCREEN_OPEN_FORMATS_POPUP,
    id,
    subId,
  }
}

export function openBulkFormatsPopup () {
  return {
    type: types.PREVIEW_SCREEN_OPEN_BULK_FORMATS_POPUP,
  }
}

export function sendPreviewRequest (previews) {
  return {
    type: types.PREVIEW_SCREEN_PREVIEW_WS_REQUEST,
    previews,
    ws: 'request_metadata'
  }
}

export function startProcessing (entry) {
  return {
    type: types.PREVIEW_SCREEN_PREVIEW_WS_PROCESS,
    entry,
    ws: 'request_downloading'
  }
}

export function startProcessingAll () {
  return (dispatch, getState) => {
    const { previewScreen } = getState()
    const { previews } = previewScreen
    const entries = []

    const addEntry = (entry) => {
      if (!entry.enabled || entry.locked) {
        return true
      }
      if (!entry.format) {
        dispatch({
          type: types.PREVIEW_SCREEN_PREVIEW_WS_PROCESS + '_ERROR',
          entry,
        })
        return false
      }
      entries.push(entry)
      return true
    }

    for (const preview of previews) {
      if (preview.children) {
        for (const childPreview of preview.children) {
          if (!addEntry(childPreview)) {
            return
          }
        }
      } else {
        if (!addEntry(preview)) {
          return
        }
      }
    }

    for (const entry of entries) {
      dispatch({
        type: types.PREVIEW_SCREEN_PREVIEW_WS_PROCESS,
        entry,
        ws: 'request_downloading'
      })
    }
  }
}

export function downloadZipAll () {
  return (dispatch, getState) => {
    const { previewScreen } = getState()
    const { previews } = previewScreen
    const entries = []

    const addEntry = (entry) => {
      if (!entry.enabled) {
        return true
      }
      if (entry.status.id !== 10) {
        dispatch({
          type: types.PREVIEW_SCREEN_PREVIEW_WS_PROCESS + '_ERROR',
          entry,
        })
        return false
      }
      entries.push(entry)
      return true
    }

    for (const preview of previews) {
      if (preview.children) {
        for (const childPreview of preview.children) {
          if (!addEntry(childPreview)) {
            return
          }
        }
      } else {
        if (!addEntry(preview)) {
          return
        }
      }
    }

    dispatch({
      type: types.PREVIEW_SCREEN_PREVIEW_WS_PROCESS + '_ZIP',
      entries,
      ws: 'request_archiving'
    })
  }
}
