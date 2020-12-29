import {SET_BANNERS, SET_RECOMMENDSONGLIST, SET_SINGERLIST} from './type'
import {artistsApi, bannerApi, personalizedApi} from "../../../api/home";


export const setBannerAction = (banners) => ({type: SET_BANNERS, banners})

export const setSongListAction = (recommendSongList) => ({type: SET_RECOMMENDSONGLIST, recommendSongList})


export const setSingerListAction = (singerList) => ({type: SET_SINGERLIST, singerList})


export const setAsyncBannerAction = () => {
    return async (dispatch) => {
        const {banners} = await bannerApi()
        dispatch(setBannerAction(banners))
    }
}

export const setAsyncSongListAction = (limit) => {
    return async (dispatch) => {
        const {result} = await personalizedApi(limit)
        dispatch(setSongListAction(result))
    }
}


export const setAsyncSingerListAction = (limit) => {
    return async (dispatch) => {
        const {artists} = await artistsApi(limit)
        dispatch(setSingerListAction(artists))
    }
}