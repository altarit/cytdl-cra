const PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS = 'PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS'
const PREVIEW_SCREEN_TOGGLE_PREVIEW = 'PREVIEW_SCREEN_TOGGLE_PREVIEW'
const PREVIEW_SCREEN_PREVIEW_WS_REQUEST = 'PREVIEW_SCREEN_PREVIEW_WS_REQUEST'
const PREVIEW_SCREEN_PREVIEW_WS_PROCESS = 'PREVIEW_SCREEN_PREVIEW_WS_PROCESS'
const PREVIEW_SCREEN_PREVIEW_WS_UPDATE = 'PREVIEW_SCREEN_PREVIEW_WS_UPDATE'

export function mapLinksToPreviews(links) {
  let previews = links.map((el, i) => {
    return {
      id: i,
      url: el,
      title: 'title',
      enabled: true,
      status: {id: 0, name: 'Initialized.'},
    }
  })
  return {
    type: PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS,
    previews: previews,
  }
}

export function togglePreview(id, value) {
  return {
    type: PREVIEW_SCREEN_TOGGLE_PREVIEW,
    id,
    value,
  }
}

export function sendPreviewRequest(previews) {
  return {
    type: PREVIEW_SCREEN_PREVIEW_WS_REQUEST,
    previews,
    ws: 'request_metadata'
  }
}

export function startProcessing(entry) {
  return {
    type: PREVIEW_SCREEN_PREVIEW_WS_PROCESS,
    entry,
    ws: 'request_downloading'
  }
}

const initialState = {
  isCompleted: false,
  previews: [],
}

const handlers = {
  [PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS]: (state, action) => {
    return {
      ...state,
      previews: action.previews,
      isCompleted: false,
    }
  },
  [PREVIEW_SCREEN_TOGGLE_PREVIEW]: (state, action) => {
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
  [PREVIEW_SCREEN_PREVIEW_WS_UPDATE]: (state, action) => {
    let nextPreviews = [...state.previews]
    for(let actionPreview of action.previews) {
      let nextPreview = {...state.previews[actionPreview.id]}
      for(let key of Object.keys(actionPreview)) {
        if (actionPreview[key]) {
          nextPreview[key] = actionPreview[key]
        }
      }
      nextPreviews[actionPreview.id] = nextPreview
    }
    return {
      ...state,
      previews: nextPreviews,
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
