import React from 'react'
import {Item} from "./style";
import {Image, Tag} from 'antd'
import {CaretRightOutlined} from '@ant-design/icons';
import {forMatPlayCount} from "../../utils/format";

export default function SongItem({name, picUrl, playCount}) {

    return (<>
        <Item>
            <Image src={picUrl} preview={false}/>
            <div className='item-name'>{name}</div>
            <div className='tag'>
                <Tag color="#0e0e0e" icon={<CaretRightOutlined/>}>{forMatPlayCount(playCount)}</Tag>
            </div>
        </Item>
    </>)
}