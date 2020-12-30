import {SET_CURRENTSONG, SET_LYRIC} from './type'
import {detailApi, lyricApi} from "../../../api/song";

export const setCurrentSongAction = (currentSong) => ({type: SET_CURRENTSONG, currentSong})
export const seLyricAction = (lyric) => ({type: SET_LYRIC, lyric})

//当前播放歌曲的action
export const setAsyncCurrentSongAction = (ids) => {
    return async (dispatch) => {
        const {songs} = await detailApi(ids)
        dispatch(setCurrentSongAction(songs[0]))
        const {lrc} = await lyricApi(ids)
        dispatch(seLyricAction(lrc.lyric))
    }
}