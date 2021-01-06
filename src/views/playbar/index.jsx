import React, {useEffect, useState} from 'react'
import {PlayBarWrapper} from "./style";
import Icon from "../../components/icon";
import {Drawer, Slider} from "antd";
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {setAsyncCurrentSongAction} from './store/action'
import {forMatPlayTime} from "../../utils/format";
import useAudio from "../../hooks/useAudio";
import useLyric from "../../hooks/useLyric";
import {BarPlayList} from "./components/BarPlayList";
import {DrawerTitle} from "./components/DrawerTitle";

const PlayBar = () => {
    //播放时间
    const [currentTime, setCurrentTime] = useState(0)
    //是否正在播放
    const [isPlaying, setIsPlaying] = useState(false)
    //是否正在滑动
    const [isChanging, setIsChanging] = useState(false)

    //滑块进度
    const [playSchedule, setPlaySchedule] = useState(0)
    //修改音量
    const [volumeSchedule, setVolumeSchedule] = useState(100)

    //修改弹出成状态
    const [layerState, setLayState] = useState(false)


    const {currentSong, playList} = useSelector(state => ({
        currentSong: state.PlayReducer.get('currentSong'),
        playList: state.PlayReducer.get('playList'),
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {

        if (currentSong) {
            dispatch(setAsyncCurrentSongAction(27808044))
        }
    }, [dispatch])


    const {audioRef} = useAudio(currentSong.id)
    const [lyric] = useLyric(currentSong.id)

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
    //点击声音之后
    const volumeSliderAfter = (value) => {
        audioRef.current.volume = value / 100
    }
    const handleLayer = () => {
        setLayState(layerState => !layerState)
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
                            <Slider value={volumeSchedule} className={'slider'}
                                    onChange={(value) => setVolumeSchedule(_ => value)}
                                    onAfterChange={volumeSliderAfter}/>
                        </div>
                    </div>
                    <div className={'icon-group'}>
                        <Icon type={'icon-cycleOne'} className={'btn'} onClick={handleLayer}/>
                        <Icon type={'icon-cycleOne'} className={'btn'}/>
                        <Icon type={'icon-cycleOne'} className={'btn'}/>
                    </div>

                    <audio ref={audioRef} onTimeUpdate={handlePlaying} preload="auto"/>
                </div>
                {
                    layerState ?
                        <Drawer maskClosable title={<DrawerTitle count={playList.length}/>} onClose={handleLayer}
                                placement="bottom"
                                closable={false}
                                visible={layerState} className={'bar-drawer'}
                                getContainer={false}>
                            <BarPlayList playList={playList}/>
                            <div style={{flex: 1}}>111</div>
                        </Drawer> : ''
                }
            </PlayBarWrapper>
        </div>
    </>)
}
export default PlayBar