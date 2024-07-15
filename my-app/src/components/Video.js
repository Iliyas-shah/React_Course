import { useEffect,useContext } from 'react';
import './Video.css'
import PlayButton from './playButton';
import ThemeContext from '../context/ThemeContext';
import useVideoDispatch from '../hooks/VideoDispatch';
export default function Video(props){
    const theme=useContext(ThemeContext);
    const dispatch=useVideoDispatch();
    // useEffect(()=>{
    //     const id=setInterval(()=>{
    //         console.log('Video Playing',props.id);
    //     },3000);
    //     return()=>{
    //         clearInterval(id);
    //     }
    // },[props.id])
    // let channelJSX;
    // if(props.verified)
    // channelJSX=<div className='channel'>Channel: {props.channel} ✅</div>
    // else
    // channelJSX=<div className='channel'>Channel: {props.channel}</div>
    // let conten="Div Section";
    return(
        <div className={`container ${theme}`} onClick={()=>console.log("App")}>
        <button className='close' onClick={()=>dispatch({type:'DEL',payload:props.id})}>X</button>
        <button className='edit' onClick={()=>props.editVideo(props)}>Edit</button>
        <div className="pic">
        <img src={`https://picsum.photos/id/${props.id}/200/300`} alt="Dodge Challenger"  />
        </div>
        <div className="title">Title: {props.topic}</div>
        <div className="likes">Likes: {props.likes}</div>
        <div className="channel">{props.channel} {props.verified?'✅':null} </div>
        <div className="views">
        Views: {props.views}</div>
        <div style={{clear:'both'}}>
        <PlayButton onPlay={()=>console.log(props.topic+"Is Playing")} onPause={()=>console.log(props.topic+"is Paused")} >{props.topic}</PlayButton>
        </div>
        </div>
    );
}
