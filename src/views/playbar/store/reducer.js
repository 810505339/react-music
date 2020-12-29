import {Map} from 'immutable'
import {SET_CURRENTSONG} from './type'

const defaultState = Map({
    currentSong: {}
})
export default function (prestate = defaultState, action) {
    const {type, currentSong} = action
    switch (type) {
        case SET_CURRENTSONG:
            return prestate.set('currentSong', currentSong)
        default:
            return prestate
    }
}