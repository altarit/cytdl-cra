import * as types from './previewScreenConstants'

export function applyPreferredExts (entry, preferredExts) {
  if (!entry.format || !preferredExts.includes(entry.format.ext)) {
    for (let j = 0; j < preferredExts.length; j++) {
      let ext = preferredExts[j]
      let found = entry.formats.find(it => it.ext === ext)
      if (found) {
        return { ...entry, format: { ...found } }
      }
    }
    return entry
  }
  return entry
}

const initialState = {
  isCompleted: false,
  previews: [],

  bulkFormats: [{
    format_id: 'audio_lossy',
    format: 'Lossy audio: mp3, m4a, ogg',
    exts: ['mp3', 'm4a', 'ogg']
  }, {
    format_id: 'audio_loseless',
    format: 'Loseless audio: flac, aiff, wav',
    exts: ['flac', 'aiff', 'wav']
  }],
  isBulkFormatsPopupOpen: false,
}
initialState.selectedFormat = initialState.bulkFormats[0]

const handlers = {
  [types.PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS]: (state, action) => {
    return {
      ...state,
      previews: action.previews,
      isCompleted: false,
    }
  },
  [types.PREVIEW_SCREEN_SELECT_FORMAT]: (state, action) => {
    const nextPreviews = [...state.previews]
    const nextPreview = { ...state.previews[action.id] }

    if (action.subId !== undefined && action.subId !== null) {
      const nextSubPreview = {
        ...nextPreview.children[action.subId],
        format: { ...action.format },
        isFormatsPopupOpen: false,
      }
      nextPreview.children[action.subId] = nextSubPreview
    } else {
      nextPreview.format = { ...action.format }
      nextPreview.isFormatsPopupOpen = false
    }

    nextPreviews[action.id] = nextPreview
    return {
      ...state,
      previews: nextPreviews,
    }
  },
  [types.PREVIEW_SCREEN_BULK_SELECT_FORMAT]: (state, action) => {
    let preferredExts = action.format.exts

    let nextPreviews = state.previews.map(entry => {
      if (entry.children && entry.children.length) {
        let nextChildren = entry.children.map(childEntry => applyPreferredExts(childEntry, preferredExts))
        return {
          ...entry,
          children: nextChildren
        }
      }

      if (entry.formats && entry.formats.length) {
        return applyPreferredExts(entry, preferredExts)
      }

      return entry
    })


    return {
      ...state,
      isBulkFormatsPopupOpen: false,
      selectedFormat: action.format,
      previews: nextPreviews,
    }
  },
  [types.PREVIEW_SCREEN_OPEN_FORMATS_POPUP]: (state, action) => {
    let nextPreviews = [...state.previews]
    let nextPreview = { ...state.previews[action.id] }

    if (action.subId !== undefined && action.subId !== null) {
      let nextSubPreview = {
        ...nextPreview.children[action.subId],
        isFormatsPopupOpen: !nextPreview.children[action.subId].isFormatsPopupOpen
      }
      nextPreview.children[action.subId] = nextSubPreview
    } else {
      nextPreview.isFormatsPopupOpen = !action.isFormatsPopupOpen
    }

    nextPreviews[action.id] = nextPreview
    return {
      ...state,
      previews: nextPreviews,
    }
  },
  [types.PREVIEW_SCREEN_OPEN_BULK_FORMATS_POPUP]: (state, action) => {
    return {
      ...state,
      isBulkFormatsPopupOpen: !state.isBulkFormatsPopupOpen,
    }
  },
  [types.PREVIEW_SCREEN_TOGGLE_PREVIEW]: (state, action) => {
    let nextPreviews = [...state.previews]
    nextPreviews[action.id] = {
      ...nextPreviews[action.id],
      enabled: action.value
    }
    return {
      ...state,
      previews: nextPreviews,
    }
  },
  [types.PREVIEW_SCREEN_PREVIEW_WS_UPDATE]: (state, action) => {
    let nextPreviews = [...state.previews]
    for (let actionPreview of action.previews) {
      let nextPreview = { ...state.previews[actionPreview.id] }

      let tempPreview = null
      if (actionPreview.subId !== undefined && actionPreview.subId !== null) {
        tempPreview = { ...nextPreview.children[actionPreview.subId] }
        nextPreview.children[actionPreview.subId] = tempPreview
      } else {
        tempPreview = nextPreview
      }

      for (let key of Object.keys(actionPreview)) {
        if (actionPreview[key]) {
          tempPreview[key] = actionPreview[key]
        }
      }

      nextPreviews[actionPreview.id] = nextPreview
    }
    return {
      ...state,
      previews: nextPreviews,
    }
  },
  [types.PREVIEW_SCREEN_PREVIEW_WS_PROCESS]: (state, { entry: actionPreview }) => {
    console.log(actionPreview)
    const nextPreviews = [...state.previews]
    const nextPreview = { ...state.previews[actionPreview.id] }

    let tempPreview = null
    if (actionPreview.subId !== undefined && actionPreview.subId !== null) {
      tempPreview = { ...nextPreview.children[actionPreview.subId] }
      nextPreview.children[actionPreview.subId] = tempPreview
    } else {
      tempPreview = nextPreview
    }

    tempPreview.locked = true
    nextPreviews[actionPreview.id] = nextPreview
    return {
      ...state,
      previews: nextPreviews,
    }
  },
  [types.PREVIEW_SCREEN_PREVIEW_HEADER_UPDATE]: (state, action) => {
    return {
      ...state,
      header: {
        href: action.finalFilePath,
      }
    }
  },
}

export default (state = initialState, action) => {
  let handler = handlers[action.type]
  if (!handler) {
    return state
  }
  return handler(state, action)
}
