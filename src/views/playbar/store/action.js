import {SET_CURRENTSONG} from './type'
import {detailApi} from "../../../api/song";

export const setCurrentSongAction = (currentSong) => ({type: SET_CURRENTSONG, currentSong})

export const setAsyncCurrentSongAction = (ids) => {
    return async (dispatch) => {
        const {songs} = detailApi(ids)
        dispatch(setCurrentSongAction(songs[0]))
    }
}