import React from 'react'
import SongItem from "./SongItem";
import {List} from "./style";


export default function SongList({songList}) {

    return (<>
        <List>
            {songList.map(item => <SongItem key={item.id} {...item} />)}
        </List>
    </>)
}