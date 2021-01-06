import {Map} from 'immutable'
import {SET_CURRENTSONG, SET_LYRIC, SET_PLAYLIST} from './type'

const defaultState = Map({
    currentSong: {},
    lyric: {},
    playList: [
        {
            "name": "丑八怪",
            "id": 27808044,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 5781,
                    "name": "薛之谦",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "600907000002830320",
            "fee": 8,
            "v": 44,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 2681139,
                "name": "意外",
                "picUrl": "https://p2.music.126.net/WPHmBisDxnoF4DrBLKwl3Q==/109951163169021112.jpg",
                "tns": [],
                "pic_str": "109951163169021112",
                "pic": 109951163169021120
            },
            "dt": 248000,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9940157,
                "vd": 0
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5964111,
                "vd": 0
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3976088,
                "vd": 0
            },
            "a": null,
            "cd": "1",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "mst": 9,
            "cp": 29001,
            "mv": 193084,
            "rurl": null,
            "publishTime": 1381161600007
        },
        {
            "name": "Fiend of the Family / Last One Standing",
            "id": 27808011,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 95057,
                    "name": "Joseph LoDuca",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 5,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 11,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 2681132,
                "name": "Curse of Chucky (Original Motion Picture Soundtrack)",
                "picUrl": "https://p2.music.126.net/K7QecjVEWmHq9RPJmNI0Ig==/109951164728046151.jpg",
                "tns": [
                    "鬼娃诅咒"
                ],
                "pic_str": "109951164728046151",
                "pic": 109951164728046140
            },
            "dt": 332166,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 13289056,
                "vd": 10010
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 7973451,
                "vd": 12596
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 5315648,
                "vd": 14156
            },
            "a": null,
            "cd": "1",
            "no": 16,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 270464,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "mst": 9,
            "cp": 743010,
            "rtype": 0,
            "rurl": null,
            "publishTime": 1380556800007
        },
    ],
})
export default function (prestate = defaultState, action) {
    const {type, currentSong, lyric, playList} = action
    console.log(action)
    switch (type) {
        case SET_CURRENTSONG:
            return prestate.set('currentSong', currentSong)
        case SET_LYRIC:
            return prestate.set('lyric', lyric)
        case SET_PLAYLIST:

            return prestate.set('playList', playList)
        default:
            return prestate
    }
}