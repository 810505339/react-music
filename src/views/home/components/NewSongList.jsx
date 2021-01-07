import {Image} from 'antd'
import {Item, List} from "./style";
import {forMatPlayTime} from "../../../utils/format";

const NewSongList = ({newSongList}) => {
    console.log(newSongList)
    return (<List>
        {newSongList.map((item, index) => <NewSongItem key={item.id} index={index}   {...item}/>)}
    </List>)
}

const NewSongItem = ({name, picUrl, song, index}) => {
    return (<>
        <Item>
            <div>
                {index + 1}
            </div>
            <div>
                <Image preview={false} src={picUrl} width={'50px'}/>
                <span>{song.artists[0].name}</span>
                <span>{name}</span>
            </div>
            <div>《{song.album.name}》</div>
            <div>{forMatPlayTime(song.duration)}</div>
        </Item>
    </>)
}


export default NewSongList