const PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS = 'PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS'

export function mapLinksToPreviews(links) {
  let previews = links.map((el, i) => {
    return {
      n: i,
      url: el,
      status: 0,
      title: 'title'
    }
  })
  return {
    type: PREVIEW_SCREEN_MAP_LINKS_TO_PREVIEWS,
    previews: previews,
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
    default:
      return state
  }
}
