import React from 'react'
import {detailApi} from '../../api/song'
import {PlayBarWrapper} from "./style";
import {StepBackwardOutlined, StepForwardOutlined, PlayCircleOutlined} from '@ant-design/icons'
import Icon from "../../components/icon";

const PlayBar = () => {

    detailApi(27808044).then(res => {
        console.log(res)
    })
    return (<>
        <div style={{height: '73px'}}>
            <PlayBarWrapper>

                <div className={'icon-wrapper'}>
                    <div>
                        <img src={'https://p2.music.126.net/HS7_TXqxk_OmQ5QQaD-7TQ==/109951165499870719.jpg'}/>
                    </div>
                    <div className={'name'}>
                        <h2 className={'ellipsis'}>奈何人间</h2>
                        <p className={'ellipsis'}>黄静美 / 乔洋</p>
                    </div>
                </div>
                <div className={'btn-group'}>
                    <Icon type={'icon-previous'} className={'btn'}/>
                    <Icon type={'icon-play'} className={'btn'}/>
                    <Icon type={'icon-next'} className={'btn'}/>
                </div>
                <div>

                </div>
                <div></div>
            </PlayBarWrapper>
        </div>
    </>)
}
export default PlayBar