import {Map} from 'immutable'
import {SET_BANNERS, SET_NEWSONGLIST, SET_RECOMMENDSONGLIST, SET_SINGERLIST} from './type'

const defaultState = Map({
    banners: [],   //banners
    recommendSongList: [],  //推荐歌单
    singerList: [],   //推荐歌手
    newSongList: []

})

export default function (preState = defaultState, action) {
    const {type, banners, recommendSongList, singerList, newSongList} = action

    switch (type) {
        case SET_BANNERS:
            return preState.set('banners', banners)
        case SET_RECOMMENDSONGLIST:
            return preState.set('recommendSongList', recommendSongList)
        case SET_SINGERLIST:
            return preState.set('singerList', singerList)
        case SET_NEWSONGLIST:
            return preState.set('newSongList', newSongList)
        default:
            return preState
    }
}