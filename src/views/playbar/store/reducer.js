import {Map} from 'immutable'
import {SET_CURRENTSONG, SET_LYRIC} from './type'

const defaultState = Map({
    currentSong: {},
    lyric: {}
})
export default function (prestate = defaultState, action) {
    const {type, currentSong, lyric} = action
    switch (type) {
        case SET_CURRENTSONG:
            return prestate.set('currentSong', currentSong)
        case SET_LYRIC:
            return prestate.set('lyric', lyric)
        default:
            return prestate
    }
}