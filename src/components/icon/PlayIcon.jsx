import {Icon} from './style'

export const PlayIcon = () => {
    return (<Icon>
        <div className="line" style={{'animation-delay': '-1.2s'}}/>
        <div className="line"/>
        <div className="line" style={{'animation-delay': '-1.5s'}}/>
        <div className="line" style={{'animation-delay': '-0.9s'}}/>
        <div className="line" style={{'animation-delay': '-0.6s'}}/>
    </Icon>)
}