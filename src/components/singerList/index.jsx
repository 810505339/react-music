import React from "react";
import SingerItem from "./SingerItem";
import {List} from "./style";

const SingerList = ({singerList}) => {

    return (<>
        <List> {singerList.map(item => <SingerItem key={item.id} {...item}/>)}</List>
    </>)
}

export default SingerList