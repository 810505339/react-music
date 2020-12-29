import axios from '../utils/request'

export function detailApi(ids) {
    return axios.get(`/song/detail?ids=${ids}`)
}

export function lyricApi(id) {
    return axios.get(`/lyric?id=${id}`)
}