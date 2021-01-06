import React from "react";
import {PlayList} from '../style'
import {CloseOutlined} from '@ant-design/icons'
import {PlayIcon} from "../../../components/icon/PlayIcon";

export const Item = ({name, ar}) => {
    return (<div className={'play-item'}>
        <span className={`ellipsis name`}>{name}</span>
        <span className={`ellipsis name`}>{ar.map(item => item.name).join('/')}</span>
        <span><CloseOutlined/></span>
        <PlayIcon/>
    </div>)
}


export const BarPlayList = ({playList}) => {
    console.log(playList)
    return (<PlayList>
        {
            playList.map(item => <Item key={item.id} {...item}/>)
        }
    </PlayList>)
}