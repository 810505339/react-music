import React from "react";
import {Item} from "./style";
import {Avatar, Image} from "antd";

const SingerItem = ({name, picUrl, musicSize}) => {
    return (<>
        <Item>
            <Image src={picUrl} preview={false}/>
            <div className='name'>{name}</div>
        </Item>
    </>)
}

export default SingerItem