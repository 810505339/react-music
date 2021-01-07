import React from "react";
import {Title} from '../style'
import {DeleteOutlined} from '@ant-design/icons'

export const DrawerTitle = ({count}) => {

    const handleClear = () => {

    }

    return (
        <Title>
            <div className={'play-list-header'}>
                <span>播放列表({count})</span>
                <span className={'clear'} onClick={handleClear}>
                    <DeleteOutlined/>
                    清除
                </span>
            </div>
            <div className={'lyrics-header'}>

            </div>
        </Title>
    )
}