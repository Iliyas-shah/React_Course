import { useContext, useState } from 'react';
import './playButton.css'
import ThemeContext from '../context/ThemeContext';
export default function PlayButton({onPlay,onPause,children}){
    const theme=useContext(ThemeContext);
    const [playing,setPlaying]=useState(false);
    function handleClick(e){
        e.stopPropagation();
        if(playing)
        onPause();
        else
        onPlay();
        setPlaying(!playing);
    }
    return(
        <>
        <button className={theme} onClick={handleClick} >{ playing? children+" ⏸️" : children+" ▶️"}</button>
        </>
    );
}