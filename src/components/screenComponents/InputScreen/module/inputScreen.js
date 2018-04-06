const INPUT_SCREEN_RESCAN_AREA = 'INPUT_SCREEN_RESCAN_AREA'

const LINK_REGEXP = new RegExp('(http|https)://([\\w_-]+(?:(?:\\.[\\w_-]+)+))([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?', 'gm')

export function rescanArea(text) {
  let links = text.match(LINK_REGEXP) || []
  return {
    type: INPUT_SCREEN_RESCAN_AREA,
    links: links,
    isCompleted: links.length > 0,
    totalCount: links.length,
    validCount: links.length,
    safeText: text,
  }
}

const initialState = {
  links: [],
  isCompleted: false,
  validCount: 0,
  totalCount: 0,
  safeText: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_SCREEN_RESCAN_AREA:
      return {
        ...state,
        isCompleted: action.isCompleted,
        links: action.links,
        totalCount: action.totalCount,
        validCount: action.validCount,
        safeText: action.safeText,
      }
    default:
      return state
  }
}
