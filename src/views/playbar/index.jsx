import React, {useEffect, useState, useCallback} from 'react'
import {PlayBarWrapper} from "./style";
import Icon from "../../components/icon";
import {Slider} from "antd";
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {setAsyncCurrentSongAction} from './store/action'
import {forMatPlayTime} from "../../utils/format";
import useAudio from "../../hooks/useAudio";

const PlayBar = () => {


    //播放时间
    const [currentTime, setCurrentTime] = useState(0)
    //是否正在播放
    const [isPlaying, setIsPlaying] = useState(false)
    //是否正在滑动
    const [isChanging, setIsChanging] = useState(false)

    //滑块进度
    const [playSchedule, setPlaySchedule] = useState(0)


    const {currentSong} = useSelector(state => ({currentSong: state.PlayReducer.get('currentSong')}), shallowEqual)

    const {audioRef} = useAudio(currentSong.id)
    const dispatch = useDispatch()
    useEffect(() => {
        if (currentSong) {
            dispatch(setAsyncCurrentSongAction(27808044))
        }
    }, [dispatch])


    //播放
    const handlePlay = () => {

        setIsPlaying(isPlaying => !isPlaying)
        setIsPlaying(!isPlaying)
        audioRef.current.play()
    }
    //暂停
    const handlePause = () => {
        audioRef.current.pause()

        setIsPlaying(isPlaying => !isPlaying)
    }
    //播放中
    const handlePlaying = (e) => {
        const {currentTime} = e.target
        setCurrentTime(() => currentTime)
        const {dt} = currentSong
        const playSchedule = (currentTime / (dt / 1000)) * 100
        setPlaySchedule(() => playSchedule)
    }

    const playSlider = (value) => {

        if (isPlaying) {
            handlePause()
        }
        if (!isChanging) {
            setIsChanging(isChanging => !isChanging)
        }

        setPlaySchedule(() => value)


    }
    const playSliderAfter = (value) => {
        if (isChanging) {
            setIsChanging(isChanging => !isChanging)
        }
        const {dt} = currentSong
        const currentTime = (value / 100) * (dt / 1000)
        setCurrentTime(() => currentTime)
        audioRef.current.currentTime = currentTime
        if (!isPlaying) {
            handlePlay()
        }

    }


    return (<>
        <div style={{height: '73px'}}>
            <PlayBarWrapper>
                <div className={'play-bar'}>
                    <div className={'icon-wrapper'}>
                        <div>
                            <img src={currentSong?.al?.picUrl}/>
                        </div>
                        <div className={'name'}>
                            <h2 className={'ellipsis'}>{currentSong.name}</h2>
                            <p className={'ellipsis'}>{currentSong?.ar?.map(item => item.name).join('/')}</p>
                        </div>
                    </div>
                    <div className={'btn-group'}>
                        <Icon type={'icon-previous'} className={'btn'}/>
                        {isPlaying ? <Icon type={'icon-pause'} className={'btn'} onClick={handlePause}/> :
                            <Icon type={'icon-play'} className={'btn'} onClick={handlePlay}/>}
                        <Icon type={'icon-next'} className={'btn'}/>
                    </div>
                    <div className={'slider-wrapper'}>
                        <div
                            className={'time'}>{forMatPlayTime(currentTime * 1000)}/ {forMatPlayTime(currentSong.dt)}</div>
                        <Slider value={playSchedule} className={'slider'} onChange={playSlider}
                                onAfterChange={playSliderAfter}/>
                        <div className={'sound-wrapper'}>
                            <Icon type={'icon-sound'} className={'btn'}/>
                            <Slider value={30} className={'slider'}/>
                        </div>
                    </div>
                    <div className={'icon-group'}>
                        <Icon type={'icon-cycleOne'} className={'btn'}/>
                        <Icon type={'icon-cycleOne'} className={'btn'}/>
                        <Icon type={'icon-cycleOne'} className={'btn'}/>
                    </div>
                    <audio ref={audioRef} onTimeUpdate={handlePlaying} preload="auto"/>
                </div>
            </PlayBarWrapper>
        </div>
    </>)
}
export default PlayBar