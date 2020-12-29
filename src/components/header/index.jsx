import React from "react";
import {HeaderWrapper, LogoWrapper, NavBar} from "./style";
import {NavLink} from "react-router-dom";


const NavUrl = [
    {
        name: '发现音乐',
        url: '/home'

    },
    {
        name: '排行榜',
        url: '/rank'
    },
    {
        name: '歌曲',
        url: '/playlist'
    },
    {
        name: '歌手',
        url: '/singer'
    },
    {
        name: '视频',
        url: '/video'
    },
    {
        name: 'mv',
        url: '/mv'
    }
]

function Header() {
    return (<div style={{height: '70px'}}>
        <HeaderWrapper>
            <div className='Header'>
                <LogoWrapper/>
                <NavBar>
                    {NavUrl.map((item, index) => <NavLink key={index} to={item.url}>{item.name}</NavLink>)}
                </NavBar>
            </div>
        </HeaderWrapper>
    </div>)
}

export default Header