import React from 'react'
import {Carousel} from "antd";
import {BannerItem} from "../style";


export default function Banner({banners}) {
    return (<>
        <Carousel>
            {banners.map((item, index) => <div key={index}>
                <BannerItem url={item.imageUrl + '?imageView&blur=40x40'}><img src={item.imageUrl}
                                                                               alt={'图片'}/></BannerItem>
            </div>)}
        </Carousel>
    </>)
}