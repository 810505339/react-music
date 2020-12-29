import React, {useEffect} from 'react'
import {Container, Title} from "./style";
import SongList from "../../components/songlist";
import Banner from "./components/Banner";
import {useSelector, useDispatch} from 'react-redux'
import {setAsyncBannerAction, setAsyncSongListAction, setAsyncSingerListAction} from './store/action'
import SingerList from "../../components/singerList";

function Home() {
    const dispatch = useDispatch()
    const {banners, songList, singerList} = useSelector((state) => {
        return {
            banners: state.homeReducer.get('banners'),
            songList: state.homeReducer.get('recommendSongList'),
            singerList: state.homeReducer.get('singerList'),
        }
    })

    useEffect(() => {
        if (!banners.length) {
            dispatch(setAsyncBannerAction())
        }
        if (!songList.length) {
            dispatch(setAsyncSongListAction(24))
        }
        if (!singerList.length) {
            dispatch(setAsyncSingerListAction(30))
        }
    }, [dispatch])


    return (<>
        <div className={'separate'}/>
        <Banner banners={banners}/>
        <Container>
            <Title>
                <h2>推荐歌单</h2>
                <SongList songList={songList}/>
            </Title>
            <Title>
                <h2>推荐新歌曲</h2>
            </Title>
            <Title>
                <h2>推荐歌手</h2>
                <SingerList singerList={singerList}/>
            </Title>
        </Container>

    </>)

}

export default Home