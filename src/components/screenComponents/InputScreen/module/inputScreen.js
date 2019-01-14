const INPUT_SCREEN_RESCAN_AREA = 'INPUT_SCREEN_RESCAN_AREA'
const INPUT_SCREEN_TOGGLE_HELP = 'INPUT_SCREEN_TOGGLE_HELP'

const LINK_REGEXP = new RegExp('(http|https)://([\\w_-]+(?:(?:\\.[\\w_-]+)+))([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?',
  'gm')

export function rescanArea(text) {
  let links = text.match(LINK_REGEXP) || []
  links = links.filter((el, i) => links.indexOf(el) === i)
  return {
    type: INPUT_SCREEN_RESCAN_AREA,
    links: links,
    isCompleted: links.length > 0,
    totalCount: links.length,
    validCount: links.length,
    safeText: text,
  }
}

export function toggleHelp() {
  return {
    type: INPUT_SCREEN_TOGGLE_HELP
  }
}

const initialState = {
  isCompleted: false,
  links: [],
  validCount: 0,
  totalCount: 0,
  safeText: '',
  exampleLinks: [
    'https://www.youtube.com/playlist?list=PLHU8QTqz8ElNQHlSbID7O4jldcwAguhwW',
    'https://tarbyrocks.bandcamp.com/track/the-first-trees',
    'https://przewalskisponies.bandcamp.com/album/reroll',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  ],
  isHelpOpen: false,
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
    case INPUT_SCREEN_TOGGLE_HELP:
      return {
        ...state,
        isHelpOpen: !state.isHelpOpen
      }
    default:
      return state
  }
}
