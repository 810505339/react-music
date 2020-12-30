import React, {useEffect} from 'react'
import {PlayBarWrapper} from "./style";
import Icon from "../../components/icon";
import {Slider} from "antd";
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {setAsyncCurrentSongAction} from './store/action'
import {forMatPlayTime} from "../../utils/format";

const PlayBar = () => {
    const {currentSong} = useSelector(state => ({currentSong: state.PlayReducer.get('currentSong')}), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        if (currentSong) {
            dispatch(setAsyncCurrentSongAction(27808044))
        }
    }, [dispatch])

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
                        <Icon type={'icon-play'} className={'btn'}/>
                        <Icon type={'icon-next'} className={'btn'}/>
                    </div>
                    <div className={'slider-wrapper'}>
                        <div className={'time'}>00:00 / {forMatPlayTime(currentSong.dt)}</div>
                        <Slider defaultValue={30} className={'slider'}/>
                        <div className={'sound-wrapper'}>
                            <Icon type={'icon-sound'} className={'btn'}/>
                            <Slider defaultValue={30} className={'slider'}/>
                        </div>
                    </div>
                    <div className={'icon-group'}>
                        <Icon type={'icon-cycleOne'} className={'btn'}/>
                        <Icon type={'icon-cycleOne'} className={'btn'}/>
                        <Icon type={'icon-cycleOne'} className={'btn'}/>
                    </div>
                </div>
            </PlayBarWrapper>
        </div>
    </>)
}
export default PlayBar