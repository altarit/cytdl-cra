const PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS = 'PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS'
const PREVIEW_SCREEN_TOGGLE_PREVIEW = 'PREVIEW_SCREEN_TOGGLE_PREVIEW'

export function mapLinksToPreviews(links) {
  let previews = links.map((el, i) => {
    return {
      id: i,
      url: el,
      status: 0,
      title: 'title',
      enabled: true,
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

const initialState = {
  isCompleted: false,
  previews: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS:
      return {
        ...state,
        previews: action.previews,
        isCompleted: false,
      }
    case PREVIEW_SCREEN_TOGGLE_PREVIEW:
      let newPreviews = [...state.previews]
      newPreviews[action.id] = {...newPreviews[action.id], enabled: action.value}
      return {
        ...state,
        previews: newPreviews,
      }
    default:
      return state
  }
}
