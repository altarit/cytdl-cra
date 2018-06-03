import previewScreenReducer, {applyPreferredExts} from './previewScreenReducer'
import * as types from './previewScreenConstants'

describe('>>> Utils --- applyPreferredExts ', () => {
  it('= applyPreferredExts()', () => {
    const result = applyPreferredExts({
      formats: [{
        format_id: 'mp3-320',
        ext: 'mp3',
      }, {
        format_id: 'flac',
        ext: 'flac',
      }],
      format: {
        format_id: 'qwe',
        ext: 'qwe',
      }
    }, ['wav', 'flac'])

    expect(result).toMatchObject({
      format: {
        format_id: 'flac',
        ext: 'flac',
      }
    })
  })
})

describe('>>> REDUCER --- Test previewScreen', () => {
  it('= PREVIEW_SCREEN_SELECT_FORMAT', () => {
    const nextState = previewScreenReducer({
      previews: [{}],
    }, {
      id: 0,
      format: {
        name: 'mp3 audio'
      }
    })


  })

  it('= PREVIEW_SCREEN_BULK_SELECT_FORMAT', () => {
    const nextState = previewScreenReducer({
      isCompleted: false,
      previews: [{
        id: 0,
        title: 'przewalskisponies - Reroll - 2 tracks',
        enabled: true,
        children: [{
          title: 'Przewalski\'s Ponies - Reroll',
          subId: 0,
          formats: [{
            format_id: 'mp3-320',
            format: 'mp3-320 - audio only (MP3 320)',
            filesize: 9100000,
            ext: 'mp3',
            format_note: 'MP3 320'
          }, {
            format_id: 'flac',
            format: 'flac - audio only (FLAC)',
            filesize: 28600000,
            ext: 'flac',
            format_note: 'FLAC'
          }],
          id: 0,
          enabled: true,
          isFormatsPopupOpen: false,
          format: {
            format_id: 'flac',
            format: 'flac - audio only (FLAC)',
            filesize: 28600000,
            ext: 'flac',
            format_note: 'FLAC'
          }
        }, {
          title: 'Reroll (Instrumental)',
          author: 'przewalskisponies',
          thumbnail: 'https://f4.bcbits.com/img/a2640932461_5.jpg',
          url: 'https://przewalskisponies.bandcamp.com/track/reroll-instrumental',
          subId: 1,
          formats: [{
            format_id: 'mp3-128',
            format: 'mp3-128 - audio only',
            ext: 'mp3'
          }],
          id: 0,
          enabled: true,
          isFormatsPopupOpen: false,
          format: {
            format_id: 'mp3-128',
            ext: 'mp3'
          }
        }
        ]
      }
      ],
      bulkFormats: [{
        format_id: 'audio_lossy',
        format: 'Lossy audio: mp3, m4a, ogg',
        exts: ['mp3', 'm4a', 'ogg']
      }, {
        format_id: 'audio_loseless',
        format: 'Loseless audio: flac, aiff, wav',
        exts: [
          'flac',
          'aiff',
          'wav'
        ]
      }],
      isBulkFormatsPopupOpen: true,
      selectedFormat: {
        format_id: 'audio_loseless',
        format: 'Loseless audio: flac, aiff, wav',
        exts: ['flac', 'aiff', 'wav']
      }
    }, {
      type: 'PREVIEW_SCREEN_BULK_SELECT_FORMAT',
      format: {
        format_id: 'audio_loseless',
        format: 'Loseless audio: flac, aiff, wav',
        exts: ['flac', 'aiff', 'wav']
      }
    })

    console.log(nextState.previews[0].children)
    console.log(!!nextState.previews[0].children[0])
    console.log(!!nextState.previews[0].children[1])
    console.log(!!nextState.previews[0].children[2])

    const childPreviews = nextState.previews[0].children
    expect(nextState.isBulkFormatsPopupOpen).toBe(false)
    expect(nextState.selectedFormat).toMatchObject({
      selectedFormat: {
        format_id: 'mp3-320',
        format: 'mp3-320 - audio only (MP3 320)',
        filesize: 9100000,
        ext: 'mp3',
        format_note: 'MP3 320'
      }
    })
  })
})
