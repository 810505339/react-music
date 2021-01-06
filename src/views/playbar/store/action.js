import {SET_CURRENTSONG, SET_LYRIC, SET_PLAYLIST} from './type'
import {detailApi, lyricApi} from "../../../api/song";

export const setCurrentSongAction = (currentSong) => ({type: SET_CURRENTSONG, currentSong})
export const seLyricAction = (lyric) => ({type: SET_LYRIC, lyric})
export const setPlayListAction = (playList) => ( {type: SET_PLAYLIST, playList})

//当前播放歌曲的action
export const setAsyncCurrentSongAction = (ids) => {
    return async (dispatch, getState) => {
        const playList = getState().PlayReducer.get('playList')
        const isFlag = playList.findIndex(item => item.id === ids)  //判断歌曲是否存在播放列表
        let song = null;//传入store设置当前播放列表

        if (isFlag < 0) {
            const {songs} = await detailApi(ids)
            song = songs[0]
            dispatch(setPlayListAction([song, ...playList]))
        } else {
            song = playList[isFlag]
        }


        dispatch(setCurrentSongAction(song))
        const {lrc} = await lyricApi(ids)
        dispatch(seLyricAction(lrc.lyric))
    }
}

