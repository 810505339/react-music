import {useRef, useEffect} from 'react'
import {getUrl} from '../api/song'

export default function (id) {
    const audioRef = useRef()
    useEffect(() => {
        audioRef.current.src = getUrl(id)
    }, [id])
    return {audioRef}
}