import {useRef, useEffect} from 'react'
import {lyricApi} from '../api/song'

export default function (id) {
    const lyric = useRef()
    useEffect(() => {
        const getLyric = async () => {
            const {lrc} = await lyricApi()

        }
        getLyric()
    }, [id])

    return [
        lyric,
    ]
}