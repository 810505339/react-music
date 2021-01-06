import axios from '../utils/request'

export function bannerApi() {
    return axios.get('/banner?type=0')
}

export function personalizedApi(limit) {
    return axios.get(`/personalized?limit=${limit}`)
}

export function artistsApi(limit) {
    return axios.get(`/top/artists?offset=1&limit=${limit}`)
}

export function newSongApi(limit) {
    return axios.get(`/personalized/newsong?limit=${limit}`)
}